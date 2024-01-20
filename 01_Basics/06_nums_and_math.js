const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

//Returns a string containing a number represented 
//either in exponential or fixed-point notation with a specified number of digits.
console.log(otherNumber.toPrecision(3));

//convert a local number into specfic digit
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));