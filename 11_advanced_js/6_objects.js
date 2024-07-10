// object

// reference type - not primative.
// objects is created by the user and is like having a box that JS doesn't really know what's in it just that it stores some stuff. Primative types like numbers JS knows what the number is a 1 is a 1, the string 'hello' is a specific string. Same goes for arrays
const obj1 = { value: 10 };
const obj2 = obj1; // references the same box, points to the box that obj1 is in.
const obj3 = { value: 10 };

obj1 === obj2; //true
obj3 === obj1; //false
obj1.value = 15;
console.log(obj1.value); //15
console.log(obj2.value); //15

[] === []; //false
// because of reference types...
// when you create an object it is held in the heap and, the variable itself in memory points to the place it it stored in the heap. So when you assign one variable equal to the other they are pointing to the same place. When the third object has the same exact values they aren't equal because it is pointing to a different location in the heap. So aren't strictly the same.

// CONTEXT
// gets confused with scope.
// context tells you where you are within the object.
// "this" keyword - what is the object environment we are in right now. Like what is to the left of the dot window.alert() === this.alert() because in global environment this is equal to window.

function a() {
  console.log('this', this); // still window object. We are inside a function but, the function can still be called by using window.a() it is apart of the window object.
}

const object4 = {
  a: function () {
    console.log(this); // object 4
  },
};

// INSTANTIATION
// when you make a copy of an object and reuse the same code. Like using a person object to create several people. "this" would be a reference to the specific person that is created.

class Player {
  //first thing that gets run
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

// makes this a subclass of Player
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Wheeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic User');

wizard1.play();
wizard1.introduce();
wizard2.play();
wizard2.introduce();
