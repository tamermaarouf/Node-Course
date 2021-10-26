const { Console } = require('console');
const fs = require('fs');

// const book = {
//     title: 'hello world',
//     author: 'tamer-maarouf'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();                //convert data buffer to string
const user = JSON.parse(dataJSON);                     //parse data into object
user.name = 'TamerMaarouf';
user.age = 41;

const userJson = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJson);
console.log(user);
console.log(user.age);
