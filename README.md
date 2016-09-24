# nodejs-sdk

NodeJS Library for https://iatacodes.org/


## Installation

    $ npm install iatacodes
  
## Documentation
  https://iatacodes.org/

## Examples
```javascript
const IC = require('iatacodes');

const ic = new IC('YOUR-API-KEY');

ic.api('airports', {code: 'CDG'}, function(error, response) {
  console.log(response);
});

ic.api('cities', {code: 'PAR'}, function(error, response) {
  console.log(response);
});

ic.api('countries', {code: 'FR'}, function(error, response) {
  console.log(response);
});

ic.api('airlines', {code: 'AF'}, function(error, response) {
  console.log(response);
});

ic.api('routes', {arrival: 'CDG'}, function(error, response) {
  console.log(response);
});

ic.api('autocomplete', {query: 'madrid'}, function(error, response) {
  console.log(response);
});

ic.api('nearby', {lat: -6.1744, lng: 106.8294, distance: 1000}, function(error, response) {
  console.log(response);
});

ic.api('timetable', {code: 'LGA', type: 'departure'}, function(error, response) {
  console.log(response);
});
```

## License

This project is licensed under the MIT license.
