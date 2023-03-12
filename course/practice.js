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
// return true if widht is greater than height and false otherwise

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

