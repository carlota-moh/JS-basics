// 1. Arithmetic operators - perform calculations

let x = 1;
let y = 3;

let sum = x + y; // expression -> produces a value
// console.log(sum);

// basic operators
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)

console.log(x); // x = 1
console.log(++x); // increment value by one before executing console.log -> x = 11
console.log(x++); // increment value by one after executing console log -> x = 11
console.log(x); // x = 12

// Decrement (--) -> same logic as with increment
console.log(--x) // x = 11

// 2. Assignment operators

let z = 20;

// all arithmetic operators have a combination with assignment operator
z++; // same as x = x + 1;
z += 5; // same as z = z + 5;
z *= 3; // same as z = z * 3;
z -= 3;
z %= 1;

// 3. Comparison operators -> result in boolean

// 3.a Relational operators

x = 1;
console.log(x > 1);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// 3.b Equality operators

// strict equality -> evaluates TYPE and VALUE, MORE PRECISE AND ACCURATE
console.log(1 === 1); // True
console.log('1' === 1); // False

// loose equality operator -> converts right side to the type on the left before evaluating
console.log(x == 1); // True
console.log('1' == 1); // True
console.log(true == 1); // True
console.log(x != 1);

// 4. Conditional operator -> if-else logic to assign value

// simple example 
let points = 110;
let customerType = points > 100 ? 'gold' : 'silver';

console.log(customerType);

// more complex example
const goldPoints = 1000;

let customer = {
    name: 'Carlota',
    points: 100
}

customer['status'] = customer.points >= goldPoints ? 'gold' : 'silver';

console.log(customer)

// 5. Logical operators -> AND, OR, NOT

// 5.a AND (&&) -> true if both are true
console.log(true && true); // true
console.log(false && true); // false

// more complex example

let applicant = {
    name: 'Gon',
    creditScore: 5.0,
    grades: 7.7,
}

let score = applicant.creditScore > 8 && applicant.grades > 6 ? 'good' : 'bad';
console.log(score);

// 5.b OR (||) -> true if either one is true
score = applicant.creditScore > 8 || applicant.grades > 6 ? 'good' : 'bad';
console.log(score)

// 5.c NOT (!) -> negation (converts to the other value)

let applicationRefused = !score;
console.log(applicationRefused);


// 5.d Logical operators with non-booleans

// we can apply logical operators with non-boolean values.

// Falsy values (kind of like False, but not exactly)
// undefined, null, 0, false, '', NaN

// Anything that is not Falsy is Truthy

// notes on evaluation order:
// OR -> as soon as a truthy value is found, it will be returned:
// this is called short-circuiting
console.log(false || 1 || 2); // returns 1
console.log(1 || 0); // returns 1
console.log('Carlota' || 1); // returns Carlota
console.log(1 || 'Carlota'); // returns 1

// AND -> it will return the last truthy value
// this is called long-circuiting
console.log('Carlota' && 1); // returns 1
console.log(1 && 'Carlota'); // returns Carlota

// POINTERS in JS:

// JS has no pointers, since variables are assigned-by-value
let userColor = 'blue';
const defaultColor = 'red';
let currentColor = userColor || defaultColor;
console.log(currentColor); // will return blue
userColor = null
console.log(currentColor); // will still return blue! JS has no pointers!

// using pointers

let userColorObj = {value: 'red'};
let currentColorObj = {value: userColorObj.value}; // will still not work, as we are using value assignment
console.log(currentColorObj);
userColorObj.value = undefined;
console.log(currentColorObj);

let currentColorObj2 = userColorObj // will work
console.log(currentColorObj2);
userColorObj.value = 'blue';
console.log(currentColorObj2);

// Bitwise operators - operate at bit level

// bitwise OR - if either of the binary digits is 1 it will be 1, else 0

// 1 -> 00000001
// 2 -> 00000010
// R -> 00000011 (3)

console.log(1 | 2); // single |
// R = 3

// bitwise AND -> similar, but applying AND logic
console.log(1 & 2); // single &
// R = 0

// Real world implementation -> POSIX system (RWX)
// R -> 00000100 (4)
// W -> 00000010 (2)
// X -> 00000001 (1)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; // initialize to 0

// uppdate permissions
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

// check if we have a certain permission

let message = (myPermission & readPermission) ? 'can read file' : 'cannot read file';
console.log(message);

// sum up -> use | to add permissions, use & to check permissions