const greet = module.exports = function(name) {
  return 'Hello ' + name;
};

var name = 'Slothbear';
var argv = process.argv[2];

if (argv) name = argv;
console.log(greet(name));
