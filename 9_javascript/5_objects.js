// objects are collections of properties
// arrays can be in objects and vice versa

var user = {
  name: 'John',
  age: 34,
  hobby: 'Soccer',
  isMarried: false,
  // this is a method
  shout: function () {
    console.log('Arg');
  },
};

// to access
user.name;
user['name'];
user.shout();

user.favoriteFood = 'steak'; // to add

user.isMarried = true; // update the property
