// When setting the array as a constant, we can
// still modify the elements within it (we just
// can't reassign the variable to anything else)

const numbers = [3, 4];
// numbers = []; // will throw an error

// adding elements
numbers.push(5, 6); // add to the end of the array
numbers.unshift(1, 2); // add to the beginning of the array
numbers.splice(2, deleteCount=0, 2.5, 2.75); // add elements at specific position

console.log(numbers);

// finding elements
// primitives

const primitivesArray = [1,2,1,3,4];

primitivesArray.indexOf(1); // return the index of the first ocurrence of the element (-1 if it does not exist)
primitivesArray.indexOf(1, fromIndex = 2); // specifies the index from which the search begins 
primitivesArray.indexOf('a'); // -1

primitivesArray.lastIndexOf(1); // same, but returns the index of the last ocurrence

primitivesArray.includes(1); // returns true if the given element exists in the array

// objects

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
];

// we cannot use the include() method here, since this method checks
// for references, and the object we will be passing to it will have a 
// different pointer in memory to the one inside the array

// courses.includes( {id: 1, name: 'a'} ); // will return false

// instead, we need to use the find() method with a callback function 
// defined inside it

// arrow function syntax
courses.find( course => course.name === 'a');

// verbose alternative
courses.find( function(course) {
    return course.name === 'a';
});

// we can also use the findIndex() method

courses.findIndex( course => course.name === 'a'); // 0

// Note that both of these functions will return the first element/index
// that matches the specified criteria.

// removing elementss

const numbersToRemove = [1,2,3,4]

const lastElement = numbersToRemove.pop(); // remove last element and return it
const firstElement = numbers.shift(); // remove the first element and return it
numbers.splice(2, deleteCount=2); // remove 2 elements starting from position 2 in the array

// emptying an array (remove all elements)

let fullArray = [1,2,3,4,5,6,7,8];
fullArray = []; // reassign to an empty array

// in this case, the original value for the array will eventually be GC. However,
// if we had another variable pointing to fullArray, it will not be eliminated from 
// memory

let fullArray2 = [1,2,3,4,5,6,7,8];
let anotherArray = fullArray2;

fullArray2 = []; // reassign to an empty array

// another will still be storing [1,2,3,4,5,6,7,8] even after reassignment. This is 
// because we have changed the pointer of numbers to a new location, but there is another
// variable that is still pointing to the old location (anotherArray)

// Another option is to truncate the array by setting its length to 0. This will affect
// both the original array as well as the rest of variables that are referencing it, as we
// are not reasssigning the array to a new place in memory.

fullArray2.length = 0; // will also affect anotherArray

// Finally, we can remove all elements using the splice method

fullArray2.splice(0, deleteCount=fullArray2.length)


