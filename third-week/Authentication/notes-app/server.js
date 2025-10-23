const express = require('express');
const connectToDB = require('./configs/db.configs');
const UserRouter = require('./routes/user.routes');
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3030;

connectToDB();
app.use(express.json());

// test route
app.get('/test', (req, res) => {
    res.send('Test route is working')
});

app.use('/api/user', UserRouter);

app.use('/api/notes', UserRouter);

// undefined routes
app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});