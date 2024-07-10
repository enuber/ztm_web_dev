// DOM Selectors
// --------------
// getElementsByTagName
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute - ex document.querySelector('li').getAttribute('random')
// setAttribute - ex document.querySelector('li').setAttribute('random', '100')

// ##Changing Styles
// not best use, would be better to add / remove a class with style to keep css in css rather than write to inline
// style.{property} - ex document.querySelector('h1').style; gets all or can add the .background to just get one style
// ex document.querySelector('h1').style.background = 'yellow; sets

// className - h1.className = 'your_name' to add a class
// classList - h1.classList gives the list of classes that exist

// classList.add - tag on .add to add a class
// classList.remove - tag on .remove to remove a class
// classList.toggle - tag on to add/remove a class based on whether it's there or not.

// ##Bonus
// innerHTML //DANGEROUS

// parentElement - ex document.querySelector('li')[2].parentElement; will give us the ul it's in
// children - ex document.querySelector('ul').children; will give us the li that are under the ul

// ##It is important to CACHE selectors in variables. Each time you run this it takes memory so good practice to do it one time and then call the variable rather than do the selection over and over
