//{}:- scope

let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "tushar"
    function two() {
        const website =" youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


// interesting concept Hosting--------
//ex-1 function directly declare
addone(5)
function addone(num) {
    return num + 1
}
//ex-2 function declare in variable
addTwo(5)
const addTwo = function(nums){
    return nums+2
}
//in ex-1 there is no error but in example 2 there was a error