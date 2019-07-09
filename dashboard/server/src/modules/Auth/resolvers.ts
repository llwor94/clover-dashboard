import * as db from '../../lib/db/helpers'
import { sign, verify } from 'jsonwebtoken'
import env, { Env } from '../../lib/config'

import { fetchUserInformation } from '../../lib/authentication'

const loggedInUser = async (_, {}, { req }) => {
  try {
    const token = await verify(req.cookies.userToken, (env as Env).JWT_SECRET)
    if (token) {
      const admin = await fetchUserInformation(token)
      return admin
    }
  } catch (e) {
    console.error(e)
  }
  return { image_url: 'sjfkdlsj' }
}

const auth = async (_, { idToken }, { res }) => {
  let token = {}
  try {
    token = await verify(idToken, (env as Env).JWT_SECRET)

    if (token) {
      const admin = await fetchUserInformation(token)
      const userToken = await sign({ ...token, id: admin.id }, (env as Env).JWT_SECRET)

      res.cookie('userToken', userToken, {
        domain: 'localhost',
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      })

      return { ...admin, tickets: [] }
    }
  } catch (e) {
    console.error(e)
  }
}

const assignAdmin = async (_, { adminId, ticketId }) => {
  const [ticket] = await db.assignAdmin(adminId, ticketId)
  console.error(ticket)
  // do we want to return a ticket or wat, d00d?
  return 'yay'
}

const createAdmin = async (_, {}) => {
  return 'hi'
}

export { assignAdmin, createAdmin, loggedInUser, auth }
