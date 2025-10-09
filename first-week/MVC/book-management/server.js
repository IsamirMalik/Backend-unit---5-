const express = require('express');
const readerRouter = require('./routes/reader.routes');
const adminRouter = require('./routes/admin.routes');

const app = express();
const PORT = 3030;

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route is working')
});

// Reader routes
app.use('/reader' , readerRouter);

// Admin routes
app.use('/admin' , adminRouter);


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});