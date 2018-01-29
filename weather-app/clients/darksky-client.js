
const request = require('request');

const sendRequest = (latitude, longitude, callback) => {

  const options = {
    url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${latitude},${longitude}`,
    json: true
  };
  
  const apiCallback = (err, response, body) => {
    if (err) {
      callback(err);
    }

    callback(undefined, body);
  };
  
  request(options, apiCallback);

};

module.exports = {
  sendRequest
};