const express = require('express');
const apiRouter = require('./routes/api.routes');
let PORT = 3030;
let app = express();


// app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route is working')
});

app.use('/api', apiRouter);

app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})