const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req,res) => {
    res.send('Test route is working')
});

app.listen(port, (req,res) =>{
    console.log(`Server is running on http://localhost:${port}`)
});