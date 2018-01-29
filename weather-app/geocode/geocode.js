
const request = require('request');

const geocode = (address, callback) => {

  const encodedAddress = encodeURIComponent(address);

  const options = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  };

  const googleCallback = (err, response, body) => {
    if (err) {
      callback('There was an error calling the Google servers to retrieve the address.');
    }

    if (body.status === 'ZERO_RESULTS') {
      callback('That address yielded zero results. Try another.');
    }

    const results = {
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    };

    callback(null, results);
  };

  request(options, googleCallback);

};

module.exports = {
  geocode
};
