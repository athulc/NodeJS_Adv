const fs = require('fs');

//Renamed file.
fs.renameSync('09-Thapa-CRUD(Async).js', '09Thapa-CRUD(Async).js')

//CRUD using Async fn.
//1. Create a folder an name it Thapa.
fs.mkdir('Thapa', (err) => {
  if(err) throw err;
  console.log('Created folder!')
})

//2. Create a file called bio.txt and add data to it.
fs.writeFile('Thapa/bio.txt', 'Hi, there!\n', (err) => {
    if(err) throw err;
    console.log('File written!')
})

//3. Add more data into the bio.txt file.
fs.appendFile('Thapa/bio.txt', 'My name is Athul!', (err) => {
    if(err) throw err;
    console.log('File appened!')
}) 

//4. Read data without getting buffer data.
fs.readFile('Thapa/bio.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
})

//5. Rename the file name to myBio.txt
fs.rename('Thapa/bio.txt', 'Thapa/myBio.txt', (err) => {
    if(err) throw err;
    console.log('File renamed!')
})

//6. Delete both file & folder.
fs.unlink('Thapa/myBio.txt', (err) => {
    if(err) throw err;
    console.log('File removed!')
    var i = 5;

    while(i > 0) { 
        console.log('Folder will be deleted in ' + i)
        i--;
        setTimeout(() => {
            
        }, 2000);
    }

    console.log('Folder \'Thapa\' going to remove...')
    fs.rmdir('Thapa', (err) => {
        if(err) throw err;
        console.log('Hurray! folder removed!')
    })
})
