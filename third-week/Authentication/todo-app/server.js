const express = require('express');
require('dotenv').config();
const app = express();
const connectToDb = require('./configs/mongodb.configs');
const UserRouter = require('./routes/user.routes');
const TodoRouter = require('./routes/todo.routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDb();

// Test route
app.get('/', (req, res) => {
    res.send('Test route is working')
});

app.use('/users' , UserRouter);

app.use('/todos' , TodoRouter);



// Handling undefined route
app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
});

// server
app.listen(PORT, () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
        
    } catch (error) {
        console.log(error.message);
    }
});
