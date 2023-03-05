// this is a statement
console.log('Hello world');

// primitives (value types)
let firstName = 'Carlota'; // string literal
let age = 23; // number literal (no int/float difference)
let isHappy = true; // boolean literal
let lastName = undefined;
let favoriteColor = null; // useful for clearing value of variable
const interestRate = 0.3; // Constant

// changing data types
console.log(typeof firstName); // string
firstName = 24;
console.log(typeof firstName); // number

console.log(typeof lastName); // undefined
console.log(typeof favoriteColor); // object

// reference types - objects, array, function

// object
let person = {
    name: "Carlota",
    age: 23
};

console.log(person)

// change properties
person.age = 21;
person['name'] = 'Gon';
console.log(person.age);
console.log(person.name);

let selection = 'name';
person[selection] = 'Gon';

// arrays - 0-indexing - dynamic, different datatypes - they are objects
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
selectedColors[2] = 24; // expand array with another values 
selectedColors = selectedColors.concat('green'); // add element at the end of array
console.log(selectedColors.length); // length of array
console.log(selectedColors);

// functions - ; goes inside, not at the end of declaration

// performing a task function
function greet(firstName, lastName) {
    let greeting = `Hello ${firstName} ${lastName}!`;
    console.log(greeting);
}

firstName = 'Carlota';
lastName = 'Monedero';
greet(firstName, lastName); // Hello Carlota Monedero!
greet(firstName); // Hello Carlota undefined!

// note: parameters = time of declaration, arguments = time of calling function

// function that calculates a value
function square(num) {
    return num*num;
}

let num = 2;
let squareNum = square(num);
console.log(num, squareNum);



