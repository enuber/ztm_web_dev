// starting with this...converting to es6
// function first() {
//   var greet = 'hi';
//   function second() {
//     alert(greet);
//   }
//   return second;
// }

// var newFunc = first();
// newFunc();

const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// CLOSURES
// closures - the function runs the function executed, now it's never going ot execute again, kind of like the first function, we just executed it once and put it into newFunc. It's going to remember that there are references to those variables alive in a memory first.

// So what a closure does and this is a rule in JS is that the child scope always has access to the parent scope. So it remembers that there is a reference to the variables it needs.

// CURRYING
// currying - process of converting a function that has multiple arguments into a function that takes them one at a time.

const multiply = (a, b) => a * b;
// here we are returning a function (b) => a * b where a is already defined.
const curriedMultiply = (a) => (b) => a * b;

// actual usage to call it but can also do...
curriedMultiply(3)(4); // 12

//this
const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree); // (b) => a * b
multiplyByThree(4); // 12

// COMPOSE
// act of putting two functions together to form a third function wehre the out of one function is the input of the other function

const compose1 = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose1(sum, sum)(5); // 7

//explanation, we pass in two functions, then we give it a number 5 which is "a". "a" gets passed into function g which is sum, this gives us 6. We then use that result to call function f which is also sum and, get back 7 which is then what is returned.

// AVOIDing side effects,  functional purity
// what this means... side effects are actions that happen in a function that we don't know anything about, if it interacts or reads/writes to an external variable or console logs.

// ex:
let a = 1;

// side effect because this function effects the global scope. Function should be it's own universe.
function b() {
  a = 2;
}

//functional purity. avoid side effects and we always want our return. We always return something and, if we give the same input we expect the same output.

// ______________________________________________________________________________
// more advanced use case of Compose
// Step 1: Define Individual Functions

const filterActiveUsers = (users) => users.filter((user) => user.active);
const mapUserNames = (users) => users.map((user) => user.name);
const sortNames = (names) => names.sort();

// Step 2: Compose Functions

const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

// Step 3: Create Transformation Pipeline

const transformUserData = compose(sortNames, mapUserNames, filterActiveUsers);

// Step 4: Use the Composed Function

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true },
  { name: 'Dave', active: false },
  { name: 'Eve', active: true },
];

const result = transformUserData(users);
console.log(result); // ["Alice", "Charlie", "Eve"]

// ______________________________________________________________________________
// more advanced use case of Currying

// example 1
// Creating Specialized Functions
// Currying allows you to create specialized functions by pre-filling some arguments of a more general function. This can be particularly useful in situations where you need to frequently call a function with some common arguments.

// Example: Discount Calculation

// Suppose you have a function that calculates the final price of an item after applying a discount and tax. You can use currying to create a specialized function for a specific discount.

function calculatePrice(discount) {
  return function (tax) {
    return function (price) {
      return price * (1 - discount) * (1 + tax);
    };
  };
}

const tenPercentDiscount = calculatePrice(0.1);
const tenPercentDiscountWithTax = tenPercentDiscount(0.07);

console.log(tenPercentDiscountWithTax(100)); // Price after 10% discount and 7% tax
console.log(tenPercentDiscountWithTax(200)); // Price after 10% discount and 7% tax

// ex 2: Functional Programming
// Currying is a common pattern in functional programming. It allows you to create higher-order functions that can be composed and reused in different ways.

// Example: Map with Curried Functions

const add = (a) => (b) => a + b;
const increment = add(1);
const numbers = [1, 2, 3, 4, 5];

const incrementedNumbers = numbers.map(increment);

console.log(incrementedNumbers); // [2, 3, 4, 5, 6]

// ex 4 -Configuration Functions
// Currying is useful for creating configuration functions where you can set some parameters ahead of time and then use the configured function later.

// Example: API Request Configuration

const createRequest = (baseUrl) => (endpoint) => (params) => {
  const url = `${baseUrl}${endpoint}?${new URLSearchParams(params)}`;
  return fetch(url).then((response) => response.json());
};

const apiRequest = createRequest('https://api.example.com');

const getUser = apiRequest('/user');
const getPosts = apiRequest('/posts');

getUser({ id: 1 }).then((user) => console.log(user));
getPosts({ userId: 1 }).then((posts) => console.log(posts));

// 5. Partial Application
// Currying can be used to partially apply a function, which means fixing a number of arguments and leaving the rest to be supplied later.

// Example: Formatting Strings
const formatString = (prefix) => (suffix) => (str) =>
  `${prefix}${str}${suffix}`;

const addBrackets = formatString('[')(']');
console.log(addBrackets('text')); // [text]

const addQuotes = formatString('"')('"');
console.log(addQuotes('text')); // "text"
