const express = require('express');
const loggerMiddleware = require('./middlewares/logger');
const connectToDb = require('./configs/db.configs');


const app = express();
const PORT = 3030;

connectToDb();

app.use(loggerMiddleware);

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route is working')
});



app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})