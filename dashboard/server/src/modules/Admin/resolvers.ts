import db from '../../lib/db/helpers'

const assignAdmin = async ({ adminId, ticketId }) => {
  const [ticket] = await db.assignAdmin(adminId, ticketId)
  console.error(ticket)
  // do we want to return a ticket or wat, d00d?
  return 'yay'
}

const createAdmin = async ({ name, image_url }) => {
  const [admin] = await db.createAdmin(name, image_url)

  return { ...admin, tickets: [] }
}

export { assignAdmin, createAdmin }
