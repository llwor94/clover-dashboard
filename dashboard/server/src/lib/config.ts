import { DotenvParseOutput, config } from 'dotenv'
import { resolve } from 'path'

export interface Env extends DotenvParseOutput {
  ANSWERHUB_ENDPOINT: string
  CLIENT_URL: string
  DATABASE_USER: string
  DATABASE_NAME: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_REDIRECT: string
  JWT_SECRET: string
  NODE_ENV: string
  TEST_AUTH: string
}

const envs: any = config({ path: resolve(__dirname, '../../.env') })

if (envs.error) {
  throw envs.error
}

export default envs.parsed as Env
