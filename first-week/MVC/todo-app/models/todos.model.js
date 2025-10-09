// Models are only for database operations / Interactions 


const fs = require('node:fs');

const getData = () => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const todos = data.todos;

    return { todos, data };

}

const addOrUpdateTodos = (data) => {
    fs.writeFileSync('./db.json', JSON.stringify(data));
}

module.exports = { getData, addOrUpdateTodos };