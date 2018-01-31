
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

  geocode.geocode(argv.address)
    .then((location) => {
      return darksky.sendRequest(location);
    })
    .then((currently) => {
      console.log(currently.temperature);
    })
    .catch((err) => {
      console.log(err);
    });

};

main();
