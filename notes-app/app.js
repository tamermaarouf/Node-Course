// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'My Name and test node.js');

// fs.appendFileSync('notes.txt', 'test to append File');

//import from notes.txt own file

// const firstName = require('./utils.js');
// console.log(firstName);

// read from notes.js
const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);
