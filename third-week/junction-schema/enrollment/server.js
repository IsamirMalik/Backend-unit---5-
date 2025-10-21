const express = require('express');
const LMSRouter = require('./routes/lms.routes');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

// Test Route
app.get('/test', (req, res) => {
    res.send('Test route is working')
});

// LMS Routes
app.use('api/lms' , LMSRouter);

// undefined routes
app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
})

// server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});