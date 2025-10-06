const express = require('express');
const eventLogger = require('./event-logger');
const delay = require('./delay');

const app = express();
const port = 3000;

/**
 * Route to trigger a log event.
 * Accepts a 'message' query parameter.
 */
app.get('/emit', (req, res) => {
    const { message } = req.query;
    if (!message) {
        return res.status(400).json({ error: 'The "message" query parameter is required.' });
    }
    eventLogger.emit('log', message);
    res.json({ status: 'Log event emitted successfully.', message });
});

/**
 * Route to delay a response.
 * Accepts 'message' and 'time' (in ms) query parameters.
 */
app.get('/delay', async (req, res) => {
    const { message = 'Default message', time = 2000 } = req.query;
    const delayedMessage = await delay(message, parseInt(time, 10));
    res.send(delayedMessage);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});