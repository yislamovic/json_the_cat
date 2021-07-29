const request = require('request');
const args = process.argv;
args.splice(0,2);
const input = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(url, (error, response, body) => {
  if (error !== null) {
    console.log('\n');
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log('\n');
      console.log(data[0].description);
      console.log('\n');
    } else {
      console.log('Cat Not Found');
    }
  }
});