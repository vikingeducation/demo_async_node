
// 1.
// let p = Promise.resolve("Hello Promise!");

// p.then((message) => {
//  console.log(message);
//  return message;
// })
//  .then((message) => {
//    console.log(message);
//  });

// let testEven = new Promise((resolve, reject) => {
//  if (Date.now() % 2 === 0 ) {
//    resolve('Even');
//  } else {
//    reject('Odd');
//  }
//});

//testEven.then((result) => {
//  console.log(result);
//}, (err) => {
//  console.log(err);
//});

testEven.then((result) => {
  console.log(result);
  throw "Trigger the catch";
})
  .catch((err) => {
  console.log(err);
 });

let num = [1,2,3,4];
nums = num.map((i) => {
  return Promise.resolve(i + 1);
});

Promise.all(nums)
 .then((results) => {
   console.log(results);
});


