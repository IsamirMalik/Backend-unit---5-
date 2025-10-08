const express = require('express');
const fs = require('node:fs');

const app = express();
const PORT = 3030;

app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ "message": "Test route is working" })
});

// Get all Students
app.get('/students',(req,res) => {
    let data = JSON.parse(fs.readFileSync('./db.json','utf-8'));
    let students = data.students;
    res.status(200).send(students)
});

// Add a new Students
app.post('/students' , (req,res) => {
    let newStudent = req.body;

    let data = JSON.parse(fs.readFileSync('./db.json' , 'utf-8'));
    let students = data.students;
    let last = students.length - 1;

    console.log(students)
    let id = students[last].id + 1;

    newStudent = { ...newStudent , id};
    console.log(newStudent);

    students.push(newStudent);
    fs.writeFileSync('./db.json' , JSON.stringify(data));

    res.status(201).send("Student added successfully")
});

// Get student by id
app.get('/students/:id' , (req,res) => {
    let id = req.params.id;

    let data = JSON.parse(fs.readFileSync('./db.json' , 'utf-8'));
    let students = data.students;

    let index = students.findIndex(student => student.id == id);
    
    if(index == -1){
        res.status(404).json({"error" : `No student with ${id} id`})
    } else {
        let student = students[index]
        res.status(200).json(student)
    }
});

// Update student by id
app.put('/students/:id' , (req,res) => {

    let id = req.params.id;
    let updatedStudent = req.body;

    let data = JSON.parse(fs.readFileSync('./db.json' , 'utf-8'));
    let students = data.students;

    let index = students.findIndex(student => student.id == id);
    
    
    if(index == -1){
        res.status(404).json({"error" : `No student with id ${id}`})
    }else {
        let updatedStudents = students.map((student) => {
            if(student.id == id){
                return {...student , ...updatedStudent}
            }else {
                return student;
            }
        })
        data.students = updatedStudents;
    }
    
    fs.writeFileSync('./db.json' , JSON.stringify(data));
    res.status(201).json({"message" : `Student details with id ${id} has been updated`})

})



// Undefined Routes
app.use((req,res)=>{
    res.status(404).send(`<h1>carefull</h1>  You just hit a undefined route`)
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})