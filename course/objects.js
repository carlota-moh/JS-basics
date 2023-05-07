// objects are collections of key-value pairs
// the properties inside an object can be anything
// including string, int, functions, other objects...

// object literal syntax - create a single object

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw() {
        console.log('Draw method called');
    }
};

// call the draw method if the circle object
// circle.draw();

// Object factory functions - create a factory that can produce objects
// they produce objects

function createCircle(radius, x, y, isVisible=true) {
    return {
        radius, // if k-v are the same, no need to add radius: radius
        location: { x, y }, // same logic applies here
        isVisible,
        draw () {
            console.log('Draw method called');
        }
    };
}

circleOne = createCircle(1, 1, 1, true);
circleTwo = createCircle(2, 2, 2, false);

console.log(circleOne);
console.log(circleTwo);

// Constructor Functions - instead of returning an object
// instead of camelNotation, we use PascalNotation
// think of Python constructors

function Circle(radius) {
    this.radius = radius; // 'this' references empty object
    this.draw = function() {
        console.log('draw method called');
    }
}

// instantiate the object
const constructedCircle = new Circle(1);

// Dynamic nature of objects - you can modify properties and methods

// NOTE: Even if we assign the variable with const, we can still modify
// the properties inside the object. const just means that we cannot 
// reassign the variable.

const circleThree = createCircle(3, 3, 3);

// add new property
circleThree.color = 'yellow';

// add new method
circleThree.drawTwo = function () { console.log('Drawing two circles')}

// delete properties/methods
delete circleThree.draw;

console.log(circleThree);

// Constructor property - present in every object, references the function
// that was used to construct/create that object

console.log(circleOne.constructor); // built with factory function
// output: Object (built-in JS constructor function)
console.log(constructedCircle.constructor); // built with constructor
// output: Circle (custom constructor function)

// IMPORTANT NOTE: In JS, functions are also objects,
// which are constructed using the built-in Function() constructor

// when we create an object using a constructor with the new keyword,
// this new word will pass an empty object to the call method in the
// Circle function as the first parameter. This will specify the target
// of 'this'. If that were not present, it will default to a global variable
// called window, but we never want to do that. After this it will pass the rest
// of arguments into the function. This will initialize the object:

const anotherCircle = new Circle(1);
// internally: Circle.call({}, 1) -> call is the function method for calling the function
// now, {} will be asign to 'this' inside the function Circle

// Another useful method for functions is apply, which allows us to pass the
// second argument as an array instead of single arguments. 

console.log(Math.max(1, 2, 3, 4)); // 4

// Equivalent to:

const numbers = [1, 2, 3, 4]

console.log(Math.max.apply(null, numbers)); // 4

// more information on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// Enumerating properties of an object

// There are two ways in which we can do this:

const constantCircle = {
    radius: 1,
    draw() {console.log(radius);}
};

// using for..in

for(let key in constantCircle) console.log(constantCircle[key]);

// using for..of

// this will return keys as an array
for(let key of Object.keys(constantCircle)) console.log(constantCircle[key]);

// this will return each key-value pair as a separate array, in which the first
// element is the key and the second one is the value

for(let entry of Object.entries(constantCircle)) console.log(entry);

// to see if a property exists in an object we can use the if..in

if('radius' in constantCircle) console.log('yes') // will log yes
if('color' in constantCircle) console.log('yes')// will not log anything

// cloning an object into another one

// there are two ways of doing this:

let cloneCircle1 = Object.assign({color: 'yellow'}, constantCircle); // we could also pass an empty object
let cloneCircle = { color: 'yellow', ...constantCircle}; // spread operator 

console.log(cloneCircle1)