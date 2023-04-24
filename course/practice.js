// Practice exercises

// Max Two Numbers
// write a funcion that takes two numbers and returns the maximum of the two

function maxNumber (a, b) {
    if (a >= b) return a;
    return b;
}

// shorter implementation
function maxNumber (a, b) {
    return (a >= b) ? a : b;
}

// console.log(maxNumber(1, 2)) // return 2
// console.log(maxNumber(5, 1)) // return 5
// console.log(maxNumber(1, 1)) // return 1

// isLandscape
// return true if width is greater than height and false otherwise

function isLandscape(width, height){
    return (width > height);
}

// console.log(isLandscape(100, 200));
// console.log(isLandscape(200, 100));


// FizzBuzz
// if the number is divisible by 3, we get fizz
// if the number is divisible by 5, we get buzz
// if both conditions are met we get fizzbuz

function fizzBuzz(input) {
    if (typeof input != 'number')
        return NaN;

    let output = '';
    if (input % 3 === 0) 
        output = output.concat('Fizz');

    if (input % 5 === 0) 
        output = output.concat('Buzz');
    
    return output

}

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz('hello'));
// console.log(fizzBuzz(false));

// checkSpeed
// speed limit is 70 km/h
// if the driver is under/at the speed limit, message is Ok
// for every 5 km above the speed limit they get 1 point
// more than 12 points and your license is suspended
// TIP: use Math.floor() to convert float to int

function checkSpeed(speed, speedLimit=70, kmPerPoint=5) {
    const numberOfPoints = Math.floor((speed - speedLimit) / kmPerPoint);

    if (numberOfPoints <= 0) return 'Ok';
    else if (numberOfPoints < 12) return `Points: ${numberOfPoints}`;
    return 'License is suspended';
}

// console.log(checkSpeed(50)); // Ok
// console.log(checkSpeed(70)); // Ok
// console.log(checkSpeed(72)); // Ok
// console.log(checkSpeed(75)); // Points: 1
// console.log(checkSpeed(80)); // Points: 2
// console.log(checkSpeed(180)); // License suspended

// showNumbers
// // show whether a number is even or odd for all numbers below a limit

function isEven(num) {
    return (num % 2 == 0) ? 'EVEN': 'ODD';
}

function showNumbers(limit) {
    for (let num = 0; num <= limit; num++) {
        console.log(num, isEven(num))
    };
}

// showNumbers(10);

// countTruthy

// take an array and count the number of truthy elements inside it
// Falsy: undefined, null, '', false, 0, NaN

function countTruthy(array) {
    let count = 0;
    for (element of array) {
        if (element) count ++;
    }
    return count;
}

// console.log(countTruthy([0,2, 1,2,3]))

// showProperties

// Display all the properties within and object that
// are of type string

function showProperties(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'string') console.log(key, obj[key]);
    }
}

// return the sum of all multiples of 3 and 5 up to a limit

function sumUpToLimit(limit) {
    let total = 0;
    
    for(let i = 0; i <= limit; i++) {
        if (i % 5 == 0 || i % 3 == 0) total += i;
    }

    return total;
}

// calculate average grade from a list of marks
// and format the output as follows:

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

function calculateGrade(marks) {
    const averageGrade = marks.reduce((x, y) => x + y) / marks.length;
    let gradeLetter = undefined;

    if (averageGrade < 60) gradeLetter = "F";
    else if (60 <= averageGrade < 70) gradeLetter = "D";
    else if (70 <= averageGrade < 80) gradeLetter = "C";
    else if (80 <= averageGrade < 90) gradeLetter = "B";
    else gradeLetter = "A";

    return {
        grade: averageGrade, 
        letter: gradeLetter
    };
}

// show rows with stars. The number of stars should correspond
// to the row number

function showStars(rows) {
    let stars = "";
    for(let i = 1; i <= rows; i++) {
        stars = stars.concat("*")
        console.log(stars);
    }
}

// create a function that shows all the prime
// numbers up to a limit

function checkPrimes(num) {
    for (let factor = 2; factor < num; factor++)
        if (num % factor === 0) return false;

    return true

}

function showPrimes(limit) {
    for (let num = 2; num <= limit; num++)
        if(checkPrimes(num)) console.log(num);
}

showPrimes(7);