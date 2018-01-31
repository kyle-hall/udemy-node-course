
const axios = require('axios');

const sendRequest = (location) => {

  const options = {
    method: 'get',
    url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${location.lat},${location.lng}`,
    responseType: 'json'
  };

  console.log('About to send the dark sky request');
  return axios(options)
    .then((res) => {
      return res.data.currently;
    })
    .catch((err) => {
      console.log(err);
    });

};

module.exports = {
  sendRequest
};
