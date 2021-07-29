const {fetchBreedDescription} = require('./breedFetcher');
const args = process.argv;
args.splice(0,2);
const breedName = args[0];
fetchBreedDescription(breedName, (error, description) => {
  if (error !== null) {
    console.log(error);
  } else {
    console.log(description);
  }
});