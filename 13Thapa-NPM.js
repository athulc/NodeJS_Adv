const chalk = require('chalk');
const validator = require('validator');

//chalk module
console.log(chalk.italic.magentaBright("Hi"));
console.log(chalk.underline.magentaBright("Hi"));
console.log(chalk.red.inverse('Athul'));
console.log(chalk.green.inverse('Athul'));
console.log(chalk.bgGreen('Athul'));
console.log(chalk.strikethrough('Deprecated!'));
console.log(chalk.blue.bold('Bolded'));

//validator module
var res = validator.isEmail("agmail.comn");
console.log(res ? chalk.green.inverse('Email is valid!'): chalk.red.inverse('Email is not valid!'));