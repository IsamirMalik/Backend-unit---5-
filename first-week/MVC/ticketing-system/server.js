const express = require('express');
const ticketRouter = require('./routes/ticket.routes');
const app = express();
const PORT = 3030;

app.use(express.json());

// All routes related to tickets
app.use('/tickets',ticketRouter)

// Test route
app.get('/test', (req, res) => {
    res.send('Test route is working')
});

// Undefines routes
app.use((req, res) => {
    res.status(404).json({ 'error': 'Route Not found' })
})


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})