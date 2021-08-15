const add = require('./Custom Module/module')

console.log(add(1, 2))

const oper = require('./Custom Module/module')

console.log(oper.add(1, 2));
console.log(oper.sub(6, 2));

const { add, sub, myName } = require('./Custom Module/module')

console.log(add(3, 5))
console.log(sub(5, 3))
console.log(myName)