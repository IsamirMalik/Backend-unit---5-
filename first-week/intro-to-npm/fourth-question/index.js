const express = require('express');
const fileinfo = require('./file-info');
const urlparser = require('./url-parser');

const app = express();
const port = 3000;


// Test route
app.get('/test', function(req,res){
    res.send('Test route is working')
});

app.get('/fileinfo', function(req,res){
    res.send(fileinfo('C:\Users\samir\OneDrive\Documents\GitHub\Backend-unit---5-\/first-week\intro-to-npm\/first-question\/first-node-module.js'))
});


app.get('/parseurl', function(req,res){
    res.send(urlparser('https://masaischool.com/course?name=backend&duration=6weeks'))
});

app.listen(port, function (req, res) {
    console.log(`Server is running on http://localhost:${port}`);
})