// functions
// alert, prompt are existing functions
// () - means execute a function

function sayHello(greeting) {
  console.log(`Say ${greeting}`);
}

sayHello('Hi');

// annonymous function, it is assigned a variable but the function itself doesn't have a name and can't call it on it's own.
var sayBye = function () {
  console.log('Say Bye');
};

sayBye();

function multiply(a, b) {
  return a * b;
}

var answer = multiply(4, 5);
console.log(answer);
