const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('Test route is working')
});

// undefined routes
app.use((req, res) => {
    res.status(404).json({ 'error': '404 : Route Not found' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});