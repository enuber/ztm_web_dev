// how js works

// what is a program?
// 1) has to allocate memory - so we can have variables and files
// 2) also has to parse and execute - read and run commands

// the browser has a JS engine - the engine reads the code we write and changes it into machine executable instructions for the browser.
// The engine consists of a memory heap and a call stack.
// memory heap - where memory allocation happens
// call stack - where code is read and executed.

//memore leak - when you have unused memory but we aren't using the variable and it's still there. By having unused memory it fills up the memory heap. This is why global variables are bad because they aren't cleaned up.

//ex :
const a = 1; // JS engine is going to remember that a = 1 and stores in the memory heap

//call stack - reads the first line, it gets put in the stack. then it runs it. removes it and then the next line is read, puts it in the stack, runs it and removes it, then reads next line etc.
console.log(1);
console.log(2);
console.log(3);

const one = () => {
  const two = () => {
    console.log(4);
  };
  two();
};

one();

//call stack - the one function get run put on stack, it hasn't returned yet because two() gets called and goes on the stack, then console log runs and gets put on top and then the stack starts running whats there and emptying.

// console.log(4);
// two();
// one();

// JS is a single threaded language that can be non-blocking??

// single-threaded - has one call stack first in last out

// so syncrhonous coding means... line 1 gets executed, then line 2 gets executed then line 3...

//non-blocking - what would happen if we had a line of code that had to accomplish a massive task like going through an array with a million items in it. If we ran synchronously everything would halt.

// asynchronous -

// set time out is apart of the web API in the browser. Not actually JS.
setTimeout(() => {
  console.log(2);
}, 2000);

// in order to actually run we need more than memory heap and call stack we need a JS run-time environment. It is built into the browser. They have web APIs, callbcak queues, and the event loop.

// so with the above if the settimeout was in the middle position...

console.log(1); // goes onto call stack, gets executed and then is removed.
setTimeout(() => {
  console.log(2);
}, 2000); //goes onto call stack, it triggers web api, gets popped out of call stack and web api sees it needs to do something in 2 seconds.
console.log(3); // now because call stack is empty this goes onto stack, get executed and removed.
//finally set time out is now done, so it is removed as web api after reading what is in it and, it is now a callback so goes into the callback queue.
// the event loop checks to see if the callstack is empty and keeps checking all the time. If it's empty it will then look to see if there are any callbacks, it will see the console.log(2), will take it from the callback queue and throw it back into the call stack where it is then executed and removed from the call stack.
