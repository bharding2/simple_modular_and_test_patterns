const greet = require (__dirname + '/lib/greet.js');

var name = 'Slothbear';

if (process.argv[2]) name = process.argv[2];
console.log(greet(name));
