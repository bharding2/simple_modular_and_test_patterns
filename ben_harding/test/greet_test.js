const expect = require('chai').expect;
const greet = require (__dirname + '/../lib/greet.js');

describe('greet', () => {
  it('should greet the user', () => {
    expect(greet.hello('Slothbear')).to.eql('Hello Slothbear');
  });
  it('should take an argument from the command line', () => {
    expect(greet.hello(process.argv[2])).to.eql('Hello ' + process.argv[2]);
  });
});
