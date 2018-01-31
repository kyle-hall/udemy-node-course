
const axios = require('axios');

const geocode = (address) => {

  const encodedAddress = encodeURIComponent(address);

  const options = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.WEATHER_APP_GOOGLE_API_KEY}&address=${encodedAddress}`,
    responseType: 'json'
  };

  return axios(options)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      console.log(JSON.stringify(data.results[0].geometry.location, undefined, 2));
      return data.results[0].geometry.location;
    })
    .catch((err) => {
      console.log(err);
    });

};

module.exports = {
  geocode
};
