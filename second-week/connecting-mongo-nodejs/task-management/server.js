const express = require('express');

const app = express();
const PORT = 3030;

app

app.get('/test', (req, res) => {
    res.send('Test route is working')
});


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})

