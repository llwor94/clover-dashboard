const db = require('./config')

module.exports = {
  getTickets: () => {
    return db('Ticket').join('Admin', 'Admin.id', 'Ticket.assigned_to_id')
  }
}
