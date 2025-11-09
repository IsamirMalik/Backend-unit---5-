const express = require('express');
const authRouter = require('./routes/auth.routes');
const cors = require('cors');
const { url } = require('inspector');
const app = express();
require('dotenv').config();
const connectToDb = require('./configs/db');
connectToDb();

const PORT =  8080;

// app.use(urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());
// Test route
app.get('/test', (req, res) => {
  res.json({ "message": "Test route is working" });
});

app.use('/api/auth', authRouter)

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ 'error': '404 : Route Not found' });
});

// Start the server
app.listen(PORT, () => {
  // console.log(process.env)
  console.log(`Server is running on port http://localhost:${PORT}`);
});