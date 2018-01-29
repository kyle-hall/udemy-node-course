
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Street address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocode(argv.address);