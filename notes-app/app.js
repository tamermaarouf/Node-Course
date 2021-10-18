const fs = require('fs');
//fs.writeFileSync('notes.txt', 'My Name and test node.js');

fs.appendFileSync('notes.txt', 'test to append File');
