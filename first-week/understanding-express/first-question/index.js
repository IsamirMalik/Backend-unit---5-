const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Test Page')
})

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page')
})

app.get('/aboutus', (req, res) => {
    res.json({
        'message': 'Welcome to the About Us Page'
    })
})

app.get('/contactus', (req, res) => {

    const Ph = "Ph - 1234567890";
    const mail = "Email - contact@contact.com";
    const address = 'Address - Delhi';

    const contact = {
        Ph,
        mail,
        address
    }
    res.json(contact);
})

app.use((req, res) => {
    res.status(404).send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});