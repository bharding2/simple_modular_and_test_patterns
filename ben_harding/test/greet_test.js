const expect = require('chai').expect;
const greet = require (__dirname + '/../lib/greet.js');

describe('greet module stuff', () => {
  it('should greet the user', () => {
    expect(greet('Slothbear')).to.eql('Hello Slothbear');
  });
});

describe('greet cli stuff', () => {
  var greetCliResult = require(__dirname + '/../bin/greet');

  describe('with arguments', () => {
    before(() => {
      this.processBackup = process.argv;
      process.argv = [null, null, 'wat'];
    });

    after(() => {
      process.argv = this.processBackup;
    });

    it('should greet wat', () => {
      expect(greetCliResult()).to.eql('Hello wat');
    });
  });

  describe('with no arguments', () => {
    before(() => {
      this.processBackup = process.argv;
      process.argv = [];
    });

    after(() => {
      process.argv = this.processBackup;
    });

    it('should greet the Slothbear', () => {
      expect(greetCliResult()).to.eql('Hello Slothbear');
    });
  });
});
