// A promise is an objec that may produce a single value some time in the future. Either as resolved or a reason it's not fullfilled, fulfilled, rejected or pending.

// before promises we had callbacks. This leads to a pyramid like strucuture with callbacks in callbacks within callbacks...

// how to create a promise

const promise = new Promise((res, rej) => {
  if (true) {
    res('stuff worked');
  } else {
    rej('Error it broke');
  }
});

const promise2 = new Promise((res, rej) => {
  setTimeout(res, 100, 'HIII');
});
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000, 'POOKIE');
});
const promise4 = new Promise((res, rej) => {
  setTimeout(res, 3000, 'IS IT ME YOUR LOOKING FOR?');
});

promise
  .then((result) => result + '!')
  .then((result2) => result2 + '?')
  .catch(() => console.log('errror!')) // this would only catch in first two .then()
  .then((result3) => result3 + '!'); // stuff worked!?!

// promise
//   .then((res) => result + '!')
//   .then((result2) => {
//     throw Error;
//     console.log(result2);
//   })
//   .catch(() => console.log('errror!'));

// runs all promises and then gives back an array of the promises in order resolved.
Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// ______________________________

//if one thing fails we would get the error
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((res) => {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
  })
  .catch(() => console.log(error));
