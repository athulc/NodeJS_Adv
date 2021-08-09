const fs = require('fs');

//To write data into a new file.
fs.writeFileSync('Sample.txt', 'Hi, there!');

//To append the data into existing file.
fs.appendFileSync('Sample.txt', 'Hi, Athul!');

//To read a file.
const buff_data = fs.readFileSync('Sample.txt'); //Binary
// console.log(buff_data);

const org_data = buff_data.toString();
// console.log(org_data);

//To rename the existing file.
fs.renameSync('Sample.txt', 'new.txt');
