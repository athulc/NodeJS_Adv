const fs = require('fs')

//Challenge

//1. Create a folder and name it Thapa.
fs.mkdirSync('Thapa');

//2. Create a file named bio.txt and add data into it.
fs.writeFileSync('Thapa/bio.txt', 'Hi, there it\' me Athul!\n');

//3. Add more data into the bio.txt file.
fs.appendFileSync('Thapa/bio.txt', 'I\'m 24 years old!')

//4. Read the data without getting buffer data at first.
const data = fs.readFileSync('Thapa/bio.txt', 'utf-8');
// console.log(data)

//5. Rename the file to myBio.txt
fs.renameSync('Thapa/bio.txt', 'Thapa/myBio.txt');

//6. Delete both the file & folder.
fs.unlink('Thapa/myBio.txt', (err) => {
 if(err) throw err;
 console.log('myBio.txt is deleted! Going to delete directory Thapa.');

 fs.rmdir('Thapa', (error) => {
   if(error) throw error;
   console.log('Directory Thapa removed!');
 });
})

//7. Delete new.txt file.
fs.unlinkSync('new.txt');
