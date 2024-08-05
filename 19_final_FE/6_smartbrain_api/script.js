const express = require('express');
const bcrypt = require('bcrypt-nodejs');
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const cors = require('cors');

const app = express();
//middleware to allow the data coming in to be read.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date(),
    },
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'john@gmail.com',
    },
  ],
};

app.get('/', (req, res) => {
  res.send(database.users);
});

//instead of using res.send() express comes with built JSOn method called res.json(). Can still send JSON using res.send(). Slight difference in what is received. When you send the request it goes through as a JSON string not just a string
app.post('/signin', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error loggin in');
  }
});

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  // in the register when you

  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

//the :id means we can put anything in the url and be able to grab this ID through the request.params property
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json('no such user');
  }
});

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json('no such user');
  }
});

//with app.listen() you pass in the port to go to and can have a function attached that can be used for anything
app.listen(3000, () => {
  console.log('app is running on port 3000');
});

/* 
after basic set up should plan out the routes. Along with this, it is best practice to test out what you are doing using using postman. Remember to change the type from GET, POST, PUT etc. when testing in postman. Also in Postman, when you use body and choose raw and then JSON. Postman also has "history" on the left side menu so you can see what you've done and rerun things you have done.

Also, we are using a database array in lieu of an actual database to begin with just to test. One of the big issues with this way of doing things is getting data and having to loop through an array to find what you are looking for. An actual DB is better suited for this.

/ -> res = this is working

/signin - POST request because we are Posting some data that is the user information. Response is either success/fail. We are doing this as a POST because we are dealing with a password so it is hidden from view. 

/register - POST request because we are adding data to data to the DB with new user info. Response is either user object 

/profile/:userId - GET request where we get the user information and return the user. (note that /:userID is so that each user has their own page)

/image - PUT - updating score for how many images scanned, so will get back the user or count updated. 
  
*/
/*
need to have passwords in hashes. here we are using bcrypt-nodejs which is deprecated, can use bcrypt.js instead.




// Load hash from your password DB.
  bcrypt.hash(password, null, null, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
  });

bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});

*/
/*
1) min 8 char max 64, longer the better. Accept ASCII and Unicode, no hints, no security questions, use 2FA. When logging in and a mistake just say that hte combi is incorrect. passowrds should only be reset by user or by an admin only if account is comporomised. Othewriwse just user

2) POST only. using HTTPS

3) Hash the password, using argon2, scrypt, bcrypt. Salt it. Bcrypt allows saltRound 10 rounds is recommended. 
*/