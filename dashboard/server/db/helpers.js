const db = require('./config')

module.exports = {
  getTickets: () => {
    return db('Ticket').join('Admin', 'Admin.id', 'Ticket.assigned_to_id')
  },
  createAdmin: (name, image_url) => {
    return db('Admin')
      .insert({ name, image_url })
      .returning('*')
  },
  assignAdmin: (adminId, ticketId) => {
    return db('Ticket')
      .insert({ external_id: ticketId, assigned_to_id: adminId })
      .returning('*')
  }
}
