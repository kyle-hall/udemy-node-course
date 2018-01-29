
const request = require('request');
const yargs = require('yargs');

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

const address = encodeURIComponent(argv.address);

const options = {
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
};

const callback = (err, response, body) => {
  const data = body.results[0];
  console.log(data.formatted_address);
  console.log(data.geometry);
};

request(options, callback);