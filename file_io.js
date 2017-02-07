var fs = require('fs');
var path = './data/lorem.txt';

var _data;

fs.readFile(path, 'utf8', function(err, data) {
  _data = data;
  err ? console.error(err) : console.log(data);
});

console.log(_data); //=> undefined

console.log('Done!');



var data = fs.readFileSync(path, 'utf8');
console.log(data);



