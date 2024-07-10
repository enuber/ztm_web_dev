// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';

// Destructuring
var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const { firstName, lastName, eyeColor } = person;
let { age } = person;

// Object properties
let a = 'test';
let b = true;
let c = 789;

const okObj = {
  a,
  b,
  c,
};

// Template strings
var message =
  'Hello ' +
  firstName +
  ' have I met you before? I think we met in ' +
  city +
  ' last summer no???';

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// Arrow functions
const whereAmI = (username, location) =>
  username && location ? 'I am not lost' : 'I am totally lost';
