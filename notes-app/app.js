//express to run server and route
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyPareser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyPareser.urlencoded({ extended:false}));
app.use(bodyPareser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors);

const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`server on localhost port ${port}`);
}



// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'My Name and test node.js');

// fs.appendFileSync('notes.txt', 'test to append File');

//import your own file

const firstName = require('./utils.js');
console.log(firstName);