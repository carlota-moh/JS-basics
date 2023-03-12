// Control Flow

// 1. if...else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

function getCurrentHour (d) {
    return d.getHours();
}

const d = new Date();
let hour = getCurrentHour(d);

// console.log(hour)

if (6 <= hour < 12)
    console.log('Good morning!');
else if (12 <= hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');   

// 2. Switch...case - not really used

// used to compare the value of a variable with something
// instead of using a miriad of if/else condition statements

let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break; // get out of case block

    case 'moderator':
        console.log('Moderator user');
        break;

    default: // default value
        console.log('Unknown role');
}

// we can do the same in a cleaner way using if...else:

if (role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderator user');
else console.log('Unknown role');

// 3. Looping

// 3.1 For loops
// for (initialExpression; condition; incrementExpression)

// as long as i < 5 the for loop will run

for (let i = 0; i < 5; i++) console.log('Execution nº', i+1)

// we can iterate both in normal and reverse order:
for (let i = 0; i <= 5; i++) if (i % 2 !== 0) console.log(i);
for (let i = 5; i >= 0; i--) if (i % 2 !== 0) console.log(i);


// 3.2.1 While loop - the variable is not part of the loop itself, bit declared externally
// while (condition)

let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
} 

// 3.2.2 Do...while - not really used

// Similar to while loops, but the condition is executed at least once,
// since the while conditions is evaluated at the end
i = 0
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// 3.3.1 For...in - iterate over an object

let person = {
    name: 'Carlota',
    age: 24,
    color: 'purple'
};

for (let key in person) console.log(person[key]);

// 3.3.2 for...of loops - iterate over an array

const colors = ['red', 'green', 'blue']
for (let color of colors) console.log(color)

// same as: for (let index in colors) console.log(color[index])
