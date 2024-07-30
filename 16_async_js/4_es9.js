//es9 or es2018

//Object spread operator, similar to arrays. ...rest would hold rest of object.
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
};

const { tiger, ...rest } = animals;

// finally
// allows you to do something after a promise finishes. So this would go back after .then().catch().finally()
//runs whether it's successful or not. could be used for clean up purposes too. Or run code no matter what.

// for await of

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

// try catch is the same as .catch() from a promise. It tries something and if
// it fails you can then do something in the catch block to handle the error
const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((res) => res.json());
      })
    );
    console.log(users, posts, albums);
  } catch (err) {
    console.log('there was a problem, ', err);
  }
};

const getData2 = async () => {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
