// async await

// ex:

// Promise
movePlayer(100, 'left')
  .then(() => movePlayer(400, 'left'))
  .then(() => movePlayer(10, 'right'))
  .then(() => movePlayer(330, 'left'));

// same code asyncy await
// this is syntactic sugar. It is doing exactly the same thing above but set up differently.

// make a function and use async before it.
async function playerStart() {
  //await - pause function until we have something back. then continue on.
  // can assign what happens to a variable to be used later if we want to.
  const firstMove = await movePlayer(100, 'left');
  await movePlayer(400, 'left');
  await movePlayer(10, 'right');
  await movePlayer(330, 'left');
}

// ______________________________

// these do the same things

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => console.log(data));

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

// ______________________________

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
