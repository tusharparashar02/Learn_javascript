const name = "tushar"
const repcount = 50
//concatenation
//console.log(name + repcount + "value"); this syntax is outdated

// this is new syntax or modern syntax by using backtiks.
//this is string interpoletion
console.log(`hello my name is ${name}and my repo is ${repcount}`);


// declaration of string
const gamename = new String('tyui-oo')
//get char at particular index
console.log(gamename[0]);
console.log(gamename.__proto__);

//.length function
// find the length of string
console.log(gamename.length);

//toUpperCase() method
// write string to uppercase
console.log(gamename.toUpperCase());

//charAt() method
//get char at which index
console.log(gamename.charAt(2));

//indexOf() method
// find the position of character at which index lie
console.log(gamename.indexOf('t'));

// substring() method 
// here we can not give the -ve value
const newString = gamename.substring(0,4)
console.log(newString);

//slice() method
//if we get -ve value so this method given the char by last  
const anotherString = gamename.slice(-8,4)
console.log(anotherString);

//trim() method
//to remove the extra space b/w the string use it
const newStringone = "    tushar    "
console.log(newStringone.trim());

// replace() method
//replace any particular char at link
const url = "https://tushar.com/tushar%20parashar "
console.log(url.replace('%20','-'))