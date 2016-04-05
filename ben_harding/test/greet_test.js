const expect = require('chai').expect;
const greet = require (__dirname + '/../lib/greet.js');

describe('greet', () => {
  it('should greet the user', () => {
    expect(greet.hello('Slothbear')).to.eql('Hello Slothbear');
  });
});
