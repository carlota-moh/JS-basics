// Math object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// useful methods
Math.round(1.9);
Math.max(1,2,3,4,5);
Math.min(1,2,3,4,5);

// String object

const message = 'hello world!';

message.length;
message[0];
message.includes('h');
message.startsWith('H'); // case sensitive
message.indexOf('i')
message.toUpperCase(); // will return a new string
message.trim(); // remove whitespaces

const newMessage = 'It\'s a wonderful day\n'
newMessage.split(' ')

// Template literals -> useful for email messages

// Object: {}
// Boolean: true, false
// String: '', ""
// Template literals: ``

const clientName = 'John';
const sellerName = 'Carlota';
const clientCount = 0;

const templateEmail = `
Hi ${clientName}:

I hope you are doing well. Thank you for contacting me!
You are client number ${clientCount + 1}

Best regards,

${sellerName}
`

// Date

// NOTE: Months are zero-based, so 0 represents Jan
// and 11 represents Dec

const now = new Date();
const date1 = new Date('May 23 2023 15:00');
const date2 = new Date(2023, 4, 23, 15, 0);


now.getDate(); // day of the month
now.setFullYear(2024); // change year
now.toDateString(); // convert to date
now.toTimeString(); // return the time component
now.toISOString(); // dateTtime -> standard format to transfer date between client and server