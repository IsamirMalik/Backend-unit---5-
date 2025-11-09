const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3030;



app.use(cors());

app.use(express.json());
// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  // console.log(process.env)
  console.log(`Server is running on port http://localhost:${PORT}`);
});