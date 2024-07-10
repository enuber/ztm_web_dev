// assed by value
// primative types hold specific values and can be reassigned and will change as expected

let a = 5; // there is an address in memory where this primative value sits.
let b = a; // making a copy of a
b++;
console.log(a, b); // 5, 6 - because JS just copies the value of a and assigns it to b so b is storing it's own data in a place in memory and a and b are not pointing to the same thing.

// passed by reference
// point to a place that stores info about what the values are, when we make a change everything pointing to that reference

let obj1 = {
  name: 'Yao',
  password: '123',
};
let obj2 = obj1; //copying the object

obj2.password = '456';

console.log(obj1, obj2); // password: 456 - both will be updated because it is being passed by reference they are both pointing to the same location in memory.

// to copy an object

const c = [1, 2, 3, 4, 5];
const d = [].concat(c); //will make a new array concatonated with c so it a new array.
const e = [...c]; //will also copy array new for es6

let objA = {
  a: 'a',
  b: 'b',
  c: 'c',
};

// these are shallow clones. Only one level deep. if you have an object in an object it will still be pass by refernce and change all.
let objB = Object.assign({}, objA);
let objC = { ...objA };

// does deep clone if obj in obj...makes the object a string and then turns back into an object which gives it all a new space in memory. Shouldn't really be done as if obj is large it will be copying a large object which will take time
let objD = JSON.parse(JSON.stringify(objA));
