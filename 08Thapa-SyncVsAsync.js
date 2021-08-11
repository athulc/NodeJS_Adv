const fs = require("fs")

//difference between Sync & Async

//Sync
const data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);
console.log('Next request!');

//Async
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Next req!')