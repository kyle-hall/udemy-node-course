
const request = require('request');

const geocode = address => {

  const encodedAddress = encodeURIComponent(address);

  const options = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  };
  
  const callback = (err, response, body) => {
    if (err) {
      console.error(`Error: ${err}`);
      process.exit(1);
    }
  
    if (body.status === 'ZERO_RESULTS') {
      console.error('Error: No results for that address');
      process.exit(1);
    }
    
    const data = body.results[0];
    console.log(data.formatted_address);
    console.log(data.geometry);
  };
  
  request(options, callback);

};

module.exports = {
  geocode
};