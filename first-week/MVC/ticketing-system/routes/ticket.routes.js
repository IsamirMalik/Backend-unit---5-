const express = require('express');
const { getAllTickets, addTicket, getTicketById, updateTicket, deleteTicket , resovleTicket } = require('../controller/ticket.controller');
const checkData = require('../middlewares/data-checker');
const { resolve } = require('path');


const ticketRouter = express.Router();

ticketRouter.get('/all-tickets', getAllTickets);

ticketRouter.post('/add-ticket', checkData , addTicket);

ticketRouter.get('/:id', getTicketById);

ticketRouter.put('/:id',updateTicket);

ticketRouter.delete('/:id', deleteTicket);

ticketRouter.patch('/:id/resolve', resovleTicket);

module.exports = ticketRouter;