const db = require('./config')

module.exports = {
  isLoggedIn: id =>
    db('Admin')
      .where('id', id)
      .returning('id'),

  getTickets: () => db('Ticket').join('Admin', 'Admin.id', 'Ticket.assigned_to_id'),

  createAdmin: google_id =>
    db('Admin')
      .insert({ google_id })
      .returning('*'),

  assignAdminToTicket: (adminId, ticketId) =>
    db('Ticket')
      .insert({ external_id: ticketId, assigned_to_id: adminId })
      .returning('*'),

  getAdminByGid: google_id =>
    db('Admin')
      .where('google_id', google_id)
      .returning('*')
      .first()
}
