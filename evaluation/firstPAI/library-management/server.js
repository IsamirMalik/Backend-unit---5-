const express = require('express');
const connectDB = require('./configs/db');
const authorRouter = require('./routes/author.routes.js');
const bookRouter = require('./routes/book.routes.js');
const app = express();
const PORT = 3030;

connectDB();

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route is working')
});

// Author routes
app.use('/author/api' , authorRouter);

// Book routes
app.use('/book/api' , bookRouter);


//Undefined routes
app.use((req,res)=>{
    res.status(404).json({ 'error': '404 : Route Not found' })
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
