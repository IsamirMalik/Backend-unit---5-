const fs = require('node:fs');


const getData = () => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let tickets = data.tickets;
    return { tickets, data };
}

const addOrUpdateTickets = (data) => {
    fs.writeFileSync('./db.json', JSON.stringify(data));
}

module.exports = { getData, addOrUpdateTickets };