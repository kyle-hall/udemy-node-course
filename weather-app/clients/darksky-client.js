
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

    if (response.statusCode !== 200) {
      callback(`Bad response: ${body}`);
    }

    callback(undefined, body);
  };

  request(options, apiCallback);

};

module.exports = {
  sendRequest
};
