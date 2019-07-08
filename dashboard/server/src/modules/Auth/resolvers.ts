import * as db from '../../lib/db/helpers'

const isLoggedIn = async () => {
  // 🚧 To-do: Check if id exists in db
  const result = await db.isLoggedIn(1)
  return result[0]
}

const assignAdmin = async (_, { adminId, ticketId }) => {
  const [ticket] = await db.assignAdmin(adminId, ticketId)
  console.error(ticket)
  // do we want to return a ticket or wat, d00d?
  return 'yay'
}

const createAdmin = async (_, { name, image_url }) => {
  const [admin] = await db.createAdmin(name, image_url)

  return { ...admin, tickets: [] }
}

export { assignAdmin, createAdmin, isLoggedIn }
