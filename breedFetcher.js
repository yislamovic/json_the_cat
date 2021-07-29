const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0].description);
      } else {
        callback(null, 'Cat not found');
      }
    }
  });
};

module.exports = {fetchBreedDescription};