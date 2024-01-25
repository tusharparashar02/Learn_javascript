const userEmail = "tushar@gmail"
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have email");
}

//falsy values
//- false, 0 , -0, BigInt 0n , "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

// check empty array
const userEmail1 = []
if(userEmail1.length === 0){
    console.log("array is empty");
}

// check empty object
const emptyObj  = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined
//----------------------------------------------------
//that returns its right-hand side operand when its left-hand side operand is null or undefined, and 
//otherwise returns its left-hand side operand.
let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
var1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator
//------------------------------
// syntax:-
// condition ? true : false

const iceprice = 100
iceprice >= 80 ? console.log("less than 80") : console.log("more than 80");