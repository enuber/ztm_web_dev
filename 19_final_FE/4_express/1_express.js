// NOTE in package.json change the start script to this file in order to run it.

// express. most popular right now is express to build server
// need to npm i express
// GET POST PUT DELETE are the methods that can be done.

// this is bare minimum that you need. Though will give a cannot get/ as there is nothing there.
// const express = require('express');

// const app = express();

// app.listen(3000);

const express = require('express');

const app = express();

//these are middleware that allow us to read the request body
//note that the urlencoded matches here in postman the x-www-form-urlencoded
//within postman this would be if you are sending back some form data via the urlencoded but we want JSON. so you select RAW and in the dropdown use JSON(application/json)
//NOTE THIS IS BEING DONE WITH POSTMAN
//postman can be used to test server before you connect to the front end
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//note that this is a get request. POST can be done but a different way will show later. When you refresh a browser it does a "GET" request so if you change this to POST it will fail.
// can also change ther route '/' to something else like '/profile'
// this means that the route name matters because if you aren't on the route the get request doesn't happen or throws and error.

// express middleware. what it does as the request comes in, it will go through usse and then go to the get/post/put delete.
// so what happens is we get the request from the website, in our case it's not being touched, then we do something in the function and when ready to move on you use next() to have it continue on. Without the next() it will hang.
// so this happens first and then you would do the rest of the methods.
app.use((req, res, next) => {
  console.log('hello');
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/profile', (req, res) => {
  // res.send('hello');
  // this gets the info from Postman doing a post request to /profile.
  console.log(req.body);

  const user = {
    name: 'sally',
    hobby: 'sewing',
  };
  // this response goe back to postman so we are sending it a user. left as an example but, could be a success or failure message.
  res.send(user);
});

app.listen(3000);

// RESTful APIs
// GET - to receive a resource PUT - change state or update resource POST - creates a resource DELETE - to remove it.

// /profile - we should be either GET a profile or POST - creating a profile so the URL makes sense for what is being done. If it's a PUT then we are updating the profile or DELETE we are deleting a profile.

// they are stateless meaning that the calls can be made independently of one another and each call contain all the data necessary to complete itself successfully

//
