
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

geocode.geocode(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
    process.exit(1);
  }

  console.log(JSON.stringify(results, undefined, 2));
});