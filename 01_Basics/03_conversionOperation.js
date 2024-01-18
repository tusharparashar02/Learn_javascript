let score = "33asd"
console.log(typeof score);
console.log(typeof (score));
// output = string , string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// output = number, NaN

let isLoggedin = 1
let booleanIsLooggedIn = Boolean(isLoggedin)
console.log(booleanIsLooggedIn);
// output= true

// let isLoggedin = 0
// let booleanIsLooggedIn = Boolean(isLoggedin)
// console.log(booleanIsLooggedIn);
// output false

let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);
//output = 33 String