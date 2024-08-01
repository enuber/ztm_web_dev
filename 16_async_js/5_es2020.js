//es2020 allSettled()

const promiseOne = new Promise((res, rej) => setTimeout(res, 3000));
const promiseTwo = new Promise((res, rej) => setTimeout(rej, 3000));

//Promise.all runs all promises at same time gives us back an array of responses. If it fails, we would get an error.
Promse.all([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log('something failed - ', e));

//Promise.allSettled doesn't care if something rejects. It comes back when all are complete regardless of res/rej
Promse.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log('something failed - ', e));

//es2021 any() - note: not overly useful but may be case based.

// Promise.any() - resluves if any of the supplied promises are resolved.
