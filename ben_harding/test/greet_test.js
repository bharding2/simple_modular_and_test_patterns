const expect = require('chai').expect;
const greet = require (__dirname + '/../lib/greet.js');

describe('greet function', () => {
  it('should greet the user', () => {
    expect(greet('Slothbear')).to.eql('Hello Slothbear');
  });
});

describe('greet cli', () => {
  before(() => {
    this.processBackup = process.argv;
    process.argv = [null, null, 'wat'];
  });

  after(() => {
    process.argv = this.processBackup;
  });

  it('should greet wat', () => {
    var greetCliResult = require(__dirname + '/../bin/greet');
    expect(greetCliResult()).to.eql('Hello wat');
  });

  describe('with no arguments', () => {
    before(() => {
      process.argv = [];
    });

    it('should greet the Slothbear', () => {
      var greetCliResult = require(__dirname + '/../bin/greet');
      expect(greetCliResult()).to.eql('Hello Slothbear');
    });
  });
});
