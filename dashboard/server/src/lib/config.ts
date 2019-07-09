import { DotenvParseOutput, config } from 'dotenv'
import { resolve } from 'path'

export interface Env extends DotenvParseOutput {
  ANSWERHUB_ENDPOINT: string
  DATABASE_USER: string
  DATABASE_NAME: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_REDIRECT: string
  JWT_SECRET: string
  TEST_AUTH: string
  NODE_ENV: string
}

const envs = config({ path: resolve(__dirname, '../../.env') })

if (envs.error) {
  throw envs.error
}

const { parsed } = envs

export default { ...parsed }
