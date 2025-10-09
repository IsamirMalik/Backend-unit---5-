const { getData , addOrUpdateTickets } = require('../models/ticket.models');

const getAllTickets = (req, res) => {
    let { tickets, data } = getData();
    res.json({ "All tickets": tickets });
};

const addTicket = (req, res) => {

    let { tickets, data } = getData();
    let newTicket = req.body;

    const lastTicket = tickets[tickets.length - 1];
    const newId = lastTicket ? lastTicket.id + 1 : 1;
    newTicket.id = newId;
    newTicket.status = 'pending';

    tickets.push(newTicket);
    data.tickets = tickets;

    addOrUpdateTickets(data);

    res.status(201).json({ "message": "Ticket added successfully", "ticket": newTicket });
};

const getTicketById = (req, res) => {

    let id = req.params.id;

    let { tickets, data } = getData();

    let index = tickets.findIndex(ticket => ticket.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Ticket not found" });
    } else {
        let ticket = tickets[index];
        res.status(200).json({ "ticket": ticket });
    }
};

const updateTicket = (req, res) => {
    let id = req.params.id;
    let updatedTicket = req.body;

    let { tickets, data } = getData();

    let index = tickets.findIndex(ticket => ticket.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Ticket not found" });
    } else {
        let updatedTickets = tickets.map((ticket, i) => {
            if (ticket.id == id) {
                return { ...ticket, ...updatedTicket };
            } else {
                return ticket;
            }
        });
        tickets = updatedTickets;
        data.tickets = tickets;
    }
    addOrUpdateTickets(data);
    res.status(200).json({ "message": "Ticket updated successfully", "ticket": tickets[index] });
};

// Delete ticket
const deleteTicket = (req, res) => {
    const id = req.params.id;

    let { tickets, data } = getData();

    const index = tickets.findIndex(ticket => ticket.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Ticket not found" });
    } else {
        let updatedTickets = tickets.filter(ticket => ticket.id != id);
        tickets = updatedTickets;
        data.tickets = tickets;
    }
    addOrUpdateTickets(data);
    res.status(200).json({ "message": "Ticket deleted successfully" });
};

const resovleTicket = (req, res) => {
    let id = req.params.id;

    let { tickets, data } = getData();

    let index = tickets.findIndex(ticket => ticket.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Ticket not found" });
    } else {
        let updatedTickets = tickets.map((ticket, i) => {
            if (ticket.id == id) {
                return { ...ticket, status: 'resolved' };
            } else {
                return ticket;
            }
        });
        tickets = updatedTickets;
        data.tickets = tickets;
    }
    addOrUpdateTickets(data);
    res.status(200).json({ "message": "Ticket resolved successfully", "ticket": tickets[index] });
};

module.exports = { getAllTickets , addTicket , getTicketById , updateTicket , deleteTicket , resovleTicket};