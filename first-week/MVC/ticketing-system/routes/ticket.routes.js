const express = require('express');
const { getAllTickets, addTicket, getTicketById, updateTicket, deleteTicket } = require('../controller/ticket.controller');
const checkData = require('../middlewares/data-checker');


const ticketRouter = express.Router();

ticketRouter.get('/all-tickets', getAllTickets);

ticketRouter.post('/add-ticket', checkData , addTicket);

ticketRouter.get('/:id', getTicketById);

ticketRouter.put('/:id',updateTicket);

ticketRouter.delete('/:id', deleteTicket);

ticketRouter.patch('/:id', (req, res) => {
    res.send('Patch ticket')
});

module.exports = ticketRouter;