const greet = module.exports = function(name) {
  return 'Hello ' + name;
};

var name = 'Slothbear';

if (process.argv[2]) name = process.argv[2];
console.log(greet(name));
