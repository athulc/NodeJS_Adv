const os = require('os');
const fs = require('fs');

console.log(os.arch())
console.log(`${os.freemem() / 1024 / 1024 / 1024 }`)
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(`${os.totalmem() / 1024 / 1024 / 1024 }`) //convert bytes to gb.
console.log(os.type())
console.log(os.homedir())
console.log(os.release())
console.log(os.userInfo())
console.log(os.uptime())

fs.unlink('read.txt', (err) => {
    console.log('deleted!')
})