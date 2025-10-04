const express = require('express');
const readData = require('./read');
const os = require('node:os');
const dns = require('node:dns');


const app = express();
const port = 3000;

// Test route
app.get('/test', function(req,res){
    res.send('Test route is working')
});

// Read file route

app.get('/read', function(req,res){
    res.send(readData('Data.txt'))
});

// System details route
app.get('/systemdetails', function(req,res){

    let totalMemory = Math.floor(os.totalmem()/ (1000000000)) + ' GB';  
    let freeMemory = Math.floor(os.freemem()/ (1000000000)) + ' GB';
    let platform = os.type();
    let cpuModel = os.cpus()[0].model;

   

    console.log(os)

    console.log(totalMemory,freeMemory,platform,cpuModel);

    res.send(`System Platform: ${platform} <br> Total Memory: ${totalMemory} <br> free Memory: ${freeMemory} <br> CPU Model: ${cpuModel}`)
});


// getting ip route
app.get('/getip' , function(req,res){
    dns.lookup('masaischool.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP address:', address); // e.g., 13.224.222.100
  let final = `IP address for masaischool.com : ${address}`
  res.send(final)
});
})


// listening to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})