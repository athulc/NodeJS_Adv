const fs = require("fs");

//create a file using async Fn.
fs.writeFile('read.txt', 'Hi there!', (err) => {
  console.log('File written!')
})

//append a file using async Fn.
fs.appendFile('read.txt', 'It\'s me Athul!', (err) => {
  console.log('File appended!'); 
})

//read a file using async fn
fs.readFile('read.txt', 'utf-8', (err, data) => {
  console.log(data)
})