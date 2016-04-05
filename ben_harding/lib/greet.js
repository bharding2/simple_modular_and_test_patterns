const greet = module.exports = function(name) {
  if (process.argv[0]) return 'Hello ' + process.argv[0];
  return 'Hello ' + name;
};
