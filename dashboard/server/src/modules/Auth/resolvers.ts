import { sign, verify } from 'jsonwebtoken'

import { assignAdmin } from '../../lib/db/helpers'
import env from '../../lib/config'
import { fetchUserInformation } from '../../lib/authentication'

const loggedInUser = async (_, {}, { req }) => {
  try {
    const token = await verify(req.cookies.userToken, env.JWT_SECRET)

    return token && (await fetchUserInformation(token))
  } catch (e) {
    console.error(e)
    return
  }
}

const auth = async (_, { idToken }, { res }) => {
  try {
    const token: any = await verify(idToken, env.JWT_SECRET)

    if (token) {
      const admin = await fetchUserInformation(token)
      const userToken = await sign({ ...token, id: admin.id }, env.JWT_SECRET)

      res.cookie('userToken', userToken, {
        domain: 'localhost',
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      })

      return { ...admin, tickets: [] }
    }
  } catch (e) {
    console.error(e)
    return
  }
}

const assignAdmin = async (_, { adminId, ticketId }) => {
  const [ticket] = await assignAdmin(adminId, ticketId)
  console.info(ticket)
  // do we want to return a ticket or wat, d00d?
  return 'yay'
}

const createAdmin = async (_, {}) => {
  return 'hi'
}

export { assignAdmin, createAdmin, loggedInUser, auth }
