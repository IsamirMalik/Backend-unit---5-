const Events = require('events');

const eventEmitter = new Events();

// Create a custom event 'log' that logs a message and a timestamp.
eventEmitter.on('log', (msg) => {
    console.log(`message: ${msg} at ${new Date()}`);
});

eventEmitter.emit('log', 'Hello');

module.exports = eventEmitter;
