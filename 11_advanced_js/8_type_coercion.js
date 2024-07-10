1 == '1'; //True - type coercion happens
1 === '1'; //False - strict so number === string of 1 isn't the same

// have to be careful on certain things like if statements with 0 or 1 will still be false/true
0 = false
1 = true 

// https://dorey.github.io/JavaScript-Equality-Table/