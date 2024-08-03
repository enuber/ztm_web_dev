// NOTE in package.json change the start script to this file in order to run it.

// RESTful APIs
// GET - to receive a resource PUT - change state or update resource POST - creates a resource DELETE - to remove it.

// /profile - we should be either GET a profile or POST - creating a profile so the URL makes sense for what is being done. If it's a PUT then we are updating the profile or DELETE we are deleting a profile.

// they are stateless meaning that the calls can be made independently of one another and each call contain all the data necessary to complete itself successfully

const express = require('express');

const app = express();

//middleware to allow the data coming in to be read.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// req object will have a few things
// req.query - what we get when we do a GET query, this will give you an object that has the query strings ?name=erik will give you back an object {name: 'erik'}

//req.body - you have to add the middleware as above that tells it what kind of data you are getting back so it can be read.

//req.headers - will give you back the headers

//req.params - gives access to the parameters of the url. So if you did app.get('/:id', ...) and then in the URL had /1234 you would get back {id: '1234'}. this can either be in the URL within browser or within postman that you add in the route name

// res object also comes with stuff
// status - gives a code based on what happened. so can do this res.status(404).send('not found'); as an example

// how to send html, css, js back this will give us back the files in the public folder.
// __dirname - gives the directory of where we are then add in the folder we want to give.
app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
  console.log(req.params);
  res.status(404).send('not found');
});

app.listen(3000);
