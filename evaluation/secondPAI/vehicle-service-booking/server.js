const express = require('express');
const connectToDB = require('./configs/db');
const UserRouter = require('./routes/user.routes');
const ServiceRouter = require('./routes/service.routes');
// require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

connectToDB();

// Test ruote
app.get('/test', (req, res) => {
  res.send('Test route is working')
});

// User Routes
app.use('/user' , UserRouter);


// service Routes
app.use('/service' , ServiceRouter);


// Undefined routes
app.use((req, res) => {
  res.status(404).json({ 'error': '404 : Route Not found' })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});