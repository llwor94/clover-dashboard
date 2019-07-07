const db = require('./config')

const helperFns = {
  getTickets: () => db('Ticket').join('Admin', 'Admin.id', 'Ticket.assigned_to_id'),

  createAdmin: (name, imageUrl) =>
    db('Admin')
      .insert({ name, image_url: imageUrl })
      .returning('*'),

  assignAdmin: (adminId, ticketId) =>
    db('Ticket')
      .insert({ external_id: ticketId, assigned_to_id: adminId })
      .returning('*')
}

module.exports = helperFns
