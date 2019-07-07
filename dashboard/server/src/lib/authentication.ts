import { config } from 'dotenv'
import { google } from 'googleapis'
import { resolve } from 'path'

config({ path: resolve(__dirname, '../../.env') })

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT } = process.env

export const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT
)

const defaultScope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email'
]

const getConnectionUrl = auth =>
  auth.generateAuthUrl({
    acces_type: 'offline',
    prompt: 'consent',
    scope: defaultScope
  })

export const googleConnectionUrl = getConnectionUrl(oauth2Client)
