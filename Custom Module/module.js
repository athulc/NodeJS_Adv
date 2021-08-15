const myName = "Athul";


const add = (num1, num2) => {
  return num1 + num2;
}

const sub = (num1, num2) => {
  return num1 - num2;
}

//Three ways for exporting functions or arguments.

//First way
module.exports = add; //at a time only one can be passed.

//Second way
module.exports.add = add;
module.exports.sub = sub;

//Third way
module.exports = { add, sub, myName }