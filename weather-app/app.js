
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const darksky = require('./clients/darksky-client');

const main = () => {

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

  geocode.geocode(argv.address, geocodeCallback);

};

const darkskyCallback = (err, result) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Printing the data', result.currently.temperature);
};

const geocodeCallback = (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
    process.exit(1);
  }

  darksky.sendRequest(results.latitude, results.longitude, darkskyCallback);
};

main();
