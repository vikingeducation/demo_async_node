
// 1.
var p = Promise.resolve('Hello Promise!');
p.then(function(message) {
  console.log(message);
  return 'Hi';
});



// 2.
var testEven = new Promise(function(resolve, reject) {
  if (Date.now() % 2 === 0) {
    resolve('Even');
  } else {
    reject('Odd');
  }
});

testEven.then(function(result) {
  console.log(result);
}, function(err) {
  console.error(err);
});


testEven
  .then(function(result) {
    console.log(result);
    throw "Boom!";
  })
  .catch(function(err) {
    console.error(err);
  });




// 3.

var nums = [1, 2, 3, 4];
nums = nums.map(function(i) {
  return Promise.resolve(i + 1);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
  });










