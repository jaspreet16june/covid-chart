var axios = require("axios").default;
var options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': '02a4bcf9e8msh3fe6f0cdc8fe9e6p136cc6jsn1b50a9b595bc'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});