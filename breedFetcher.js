const request = require('request');
const args = process.argv.splice(2);
//console.log(args);
const breed = args[0];
console.log(breed);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  // console.log(data[0]);
  console.log(data[0].description);
});





//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
//request(url, (error, resp, body) => {


// if (breed) {
//   callback (null, breed.description);
// }
// else {
//   callback(`failed ${breed}` , null);
// }
  
  

