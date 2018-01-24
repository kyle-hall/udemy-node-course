
const request = require('request');

const options = {
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4308+Wakonda+Parkway+des+moines',
  json: true
};

const callback = (err, response, body) => {
  const data = body.results[0];
  console.log(data.geometry);
};

request(options, callback);