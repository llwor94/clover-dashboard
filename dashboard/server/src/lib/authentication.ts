import axios from 'axios'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

import env, { Env } from './config'
import { Admin, FetchData, GoogleAPIResponse, PeopleAPIResponse, TokensResponse } from './types'

export const oauth2Client = new google.auth.OAuth2(
  (env as Env).GOOGLE_CLIENT_ID,
  (env as Env).GOOGLE_CLIENT_SECRET,
  (env as Env).GOOGLE_REDIRECT
) as OAuth2Client

export const key = new Uint8Array([85, 95, 82, 95, 65, 87, 69, 83, 79, 109, 69, 55358])

const scope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
]

const getConnectionUrl = (auth: OAuth2Client) =>
  auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope
  })

export const googleConnectionUrl = getConnectionUrl(oauth2Client)

const fetchData: FetchData = async (accessToken, tokenType, url) =>
  await axios
    .get(url, { headers: { Authorization: `${tokenType} ${accessToken}` } })
    .catch((e: Error) => console.error(e.message))

export const fetchGoogleProfile = async (req: Request, res: Response) => {
  const admin = {} as Admin

  if (req.query && req.query.code) {
    const { tokens } = await oauth2Client.getToken(req.query.code)

    if (tokens && tokens.access_token) {
      oauth2Client.setCredentials(tokens)
      admin.accessToken = (tokens as TokensResponse).access_token
      admin.tokenType = (tokens as TokensResponse).token_type
    }

    // Google+ API: fetch email, name, image
    if (admin.accessToken && admin.tokenType) {
      const googleAPIUrl = 'https://www.googleapis.com/plus/v1/people/me'
      const {
        data: { displayName, emails, image, name }
      }: GoogleAPIResponse = await fetchData(admin.accessToken, admin.tokenType, googleAPIUrl)

      if (emails && emails.length > 0) {
        admin.email = emails[0].value
      }
      if (name) {
        admin.name = {
          firstName: name.givenName,
          lastName: name.familyName
        }
      }
      if (displayName) {
        admin.displayName = displayName
      }
      if (image) {
        admin.image = image.url
      }

      // People API: fetch image
      const peopleAPIUrl = 'https://people.googleapis.com/v1/people/me?personFields=photos'
      const {
        data: { photos }
      }: PeopleAPIResponse = await fetchData(admin.accessToken, admin.tokenType, peopleAPIUrl)

      if (photos && photos.length > 0) {
        admin.image = photos[0].url
      }

      admin.key = key.reduce((a, c) => a + String.fromCharCode(c), '')
      const token = sign(admin, (env as Env).JWT_SECRET)

      // Send the encrypted admin info as a JWT to the frontend
      res.cookie('id_token', token)
      console.info(admin, '👽')

      // To-do: Store some shit in the db

      res.redirect(`http://localhost:3000?id_token=${admin.key + token}`)
      return
    }

    res.redirect('http://localhost:3000/login')
  }
}
