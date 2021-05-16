const jest = require('jest');
const args = process.argv.slice(2);

jest.run('./' + args[0] + '/' + args[1] + '.test.js');