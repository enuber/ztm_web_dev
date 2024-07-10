// var button = document.querySelector('button');
// console.log(button, 'hello');

// button.addEventListener('click', function () {
//   console.log('clicked');
// });

//other events
// https://www.w3schools.com/jsref/dom_obj_event.asp
// mouseenter, mouseleave...

var button = document.querySelector('.enter');
var input = document.querySelector('input');
var ul = document.querySelector('ul');

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

button.addEventListener('click', function (evt) {
  if (input.value.length > 0) {
    createListElement();
  }
});

input.addEventListener('keypress', function (evt) {
  if (input.value.length > 0 && evt.key === 'Enter') {
    createListElement();
  }
});
