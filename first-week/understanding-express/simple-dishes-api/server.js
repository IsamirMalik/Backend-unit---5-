const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

app.use(express.json());


// Test Route
app.get('/test', (req, res) => {
    res.json({ "message": "Test route is working" })
});

app.get('/dishes/get', (req, res) => {

    let name = req.query.name.toLocaleLowerCase();

    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let dishes = data.dishes;

    console.log(name)

    let dish = dishes.filter(dish => dish.name.toLocaleLowerCase().includes(name) );

    if (!dish) {
        res.status(404).json({ "message": "Dish not found" });
    } else {
        res.status(200).json({ "Serach Result": dish });
    }

})

// Add a new dish
app.post('/dishes', (req, res) => {
    let newDish = req.body;

    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let dishes = data.dishes;

    let id = dishes[dishes.length - 1].id + 1;
    newDish = { ...newDish, id };
    console.log(newDish)

    dishes.push(newDish);
    fs.writeFileSync('./db.json', JSON.stringify(data));

    res.status(201).json({ "message": "Dish added successfully" });
});

// Get all dishes
app.get('/dishes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    let dishes = data.dishes;

    res.status(200).json({ "dishes": dishes });
});


// Get a single dish by Id
app.get('/dishes/:id', (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let dishes = data.dishes;

    let index = dishes.findIndex(dish => dish.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Dish not found" });
    } else {
        let dish = dishes[index];
        res.status(200).json({ "dish": dish });
    }

});

// Update a dish
app.put('/dishes/:id', (req, res) => {
    let id = req.params.id;
    let updatedDish = req.body;

    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let dishes = data.dishes;

    let index = dishes.findIndex(dish => dish.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Dish not found" });
    } else {
        let updatedDishes = dishes.map((dish, i) => {
            if (dish.id == id) {
                return { ...dish, ...updatedDish };
            } else {
                return dish;
            }
        });

        data.dishes = updatedDishes;
    }

    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.status(200).json({ "message": "Dish updated successfully" });

});


// Delete a dish
app.delete('/dishes/:id', (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let dishes = data.dishes;

    let index = dishes.findIndex(dish => dish.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Dish not found" });
    } else {
        let updatedDishes = dishes.filter(dish => dish.id != id);
        data.dishes = updatedDishes;
    }

    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.status(200).json({ "message": "Dish deleted successfully" });
});


// Undefined Route
app.use((req, res) => {
    res.status(404).json({ 'error': 'Route Not found' })
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})