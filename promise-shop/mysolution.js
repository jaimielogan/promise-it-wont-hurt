//Lesson 1
// setTimeout(function(){
//   console.log("TIMED OUT!");
// },300);

// Lesson 2

// var promise = new Promise(function(fulfill, reject){
//   setTimeout(function(){
//     fulfill("FULFILLED!");
//   },300);
// })
// .then(function(results){
//   console.log(results);
// });

// Lesson 3

// var promise = new Promise(function (fullfill, reject){
//   setTimeout(function(){
//     // Create new error object
//     reject(new Error("REJECTED!"));
//   },300);
// });
//
// function onReject (error) {
//   console.log(error.message);
// }

// the .then will take two callbacks, the first one the fullfilled & and teh second for teh rejected;
// promise.then(null, onReject);

// Lesson 4
// var promise = new Promise(function(fulfill, reject){
//   fulfill("I FIRED");
//   reject(new Error("I DID NOT FIRE"));
// });
//
// function onRejected(error){
//   console.log(error.message);
// }
//
// promise.then(console.log,onRejected);

// Lesson 5
// var promise = new Promise(function(fulfill, reject){
//   fulfill("PROMISE VALUE");
// })
// .then(console.log);
//
// console.log("MAIN PROGRAM");


// Lesson 6

// var promiseCatch = new Promise(function(fulfill, reject){
//   reject(new Error("error"));
// })
// .catch(function(error){
//   console.log(error);
// });
//
// var promiseResolve = Promise.resolve("Fulfilled!");
//
// var promiseReject = Promise.reject(new Error("error!"));


// Lesson 7
// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function(secretValue){
//   return second(secretValue);
// });
//
// secondPromise.then(function(secretValue){
//   console.log(secretValue);
// });

// Lesson 8

// function attachTitle(firstargument){
//   return "DR. " + firstargument;
// }
//
// Promise.resolve("MANHATTAN")
//   .then(attachTitle)
//   .then(console.log);


// Lesson 9

// function parsePromised(json){
//   return new Promise(function(fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     }
//     catch (error) {
//       reject(error);
//     }
//   });
// }
//
// parsePromised(process.argv[2])
// .then(null, console.log);

// Lesson 10

function alwaysThrows(){
  throw new Error("OH NOES");
}

function iterate(number){
  console.log(number);
  number ++;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(null,alwaysThrows);
