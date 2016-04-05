const greet = module.exports = {
  hello: function(name) {
    return 'Hello ' + name;
  }
};

var name = 'Slothbear';

if (process.argv[2]) name = process.argv[2];
console.log(greet.hello(name));
