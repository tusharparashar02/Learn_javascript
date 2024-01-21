//Arrays

//declaration
const myArr = [0,12,3,3,64]
console.log(myArr[0]);
const myHerros = ["ironman", "thor"]
const myArr2 = new Array(1,23,456,6)

// Arrays methods
//1- .push :- add the value at last
myArr.push(6)
myArr.push(90)
console.log(myArr);
//2- .pop :- remove the value at last
myArr.pop()
console.log(myArr);

// unshift() :- this method add the value at first
// but this is very time consuming method for long array.
myArr.unshift(5)

// includes() :- return boolean to check no. is present or not in the array.
console.log(myArr.includes(9));

// indexOf():- return index of the number.

// join() :- it binds the array but retun type is string.
const newArr  = myArr.join()
console.log(myArr);
console.log(newArr);


// Difference Between slice and splice
console.log("A", myArr); // print orignal array
// slice
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);  // print slice array

//splice
const myn2 = myArr.splice(1,3)
console.log("C", myArr); //print splice array
console.log(myn2); 

