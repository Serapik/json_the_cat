 const request = require('request');
 const fetchBreedDescription = function(breedName, callback) {

 // 
// const breed = args[0];
// console.log(breed);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
console.log(typeof body);     
 
if (error) {

  callback(error, null)
    return;
}
const data = JSON.parse(body);

if (data.lenght === 0) {
  callback("breed not found", undefined);
} 
callback(null, data[0].description);
  


});

};
module.exports = { fetchBreedDescription };

// const breedDescription = fetchBreedDescription('Siberian', (error, description) => {

// });

// 
// 
// //console.log(args);
// 
// 
//   const data = JSON.parse(body);
//   // console.log(data);
//   // console.log(typeof data);
//   // console.log(data[0]);
//   console.log(data[0].description);
// });





//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
//request(url, (error, resp, body) => {


// if (breed) {
//   callback (null, breed.description);
// }
// else {
//   callback(`failed ${breed}` , null);
// }
  
  
