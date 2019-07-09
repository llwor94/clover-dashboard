import axios from 'axios'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

import * as db from './db/helpers'

import env, { Env } from './config'
import { FetchData, PeopleAPIResponse, TokensResponse } from './types'

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

const fetchData: FetchData = (accessToken, tokenType, url) =>
  axios
    .get(url, { headers: { Authorization: `${tokenType} ${accessToken}` } })
    .catch((e: Error) => console.error(e.message))

const getAdmin = async googleId => {
  try {
    const existingAdmin = await db.getAdminByGid(googleId)
    return existingAdmin || db.createAdmin(googleId)
  } catch (e) {
    console.error(e)
  }
}

export const fetchUserInformation = async token => {
  try {
    const { accessToken, tokenType } = token

    const googleAPIUrl = 'https://www.googleapis.com/plus/v1/people/me'
    const {
      data: { displayName, emails, name, image, id }
    } = await fetchData(accessToken, tokenType, googleAPIUrl)

    const admin = {
      email: emails[0].value,
      name: {
        firstName: name.givenName,
        lastName: name.familyName
      },
      displayName,
      image_url: image.url,
      google_id: id
    }

    // // People API: fetch image
    const peopleAPIUrl = 'https://people.googleapis.com/v1/people/me?personFields=photos'
    const {
      data: { photos }
    }: PeopleAPIResponse = await fetchData(accessToken, tokenType, peopleAPIUrl)

    if (photos && photos.length > 0) {
      admin.image_url = photos[0].url
    }

    const dbAdmin = await getAdmin(admin.google_id)

    return { ...admin, id: dbAdmin.id }
  } catch (e) {
    return e
  }
}

export const fetchGoogleProfile = async (req: Request, res: Response) => {
  if (req.query && req.query.code) {
    const { tokens } = await oauth2Client.getToken(req.query.code)

    if (tokens && tokens.access_token) {
      oauth2Client.setCredentials(tokens)
    }

    const token = await sign(
      {
        accessToken: (tokens as TokensResponse).access_token,
        tokenType: (tokens as TokensResponse).token_type
      },
      (env as Env).JWT_SECRET
    )

    res.redirect(`http://localhost:3000/login?id_token=${token}`)

  } else {
    res.redirect(
      'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login&response_type=code&client_id=363050689676-h91ocjh11ev1gvujf7iceomg56cl65ju.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth'
    )
  }
}
