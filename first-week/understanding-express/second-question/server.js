const express = require('express');
const app = express();
const port = 3000;

const users = [

    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
    { "id": 3, "name": "Bob Smith", "email": "bob@example.com" },

]


app.get('/users/get', (req, res) => {
    res.send(users[0])
})

app.get('/users/list', (req, res) => {
    res.status(200).send(users)
})

app.use((req, res) => {
    res.status(404).json({'error':'Route Not found'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})