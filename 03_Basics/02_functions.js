function calCartPrice(...num1) {
    return num1
}
//console.log(calCartPrice(200,400,500));


const user= {
    username: "tushar",
    prices: 123
}
function handelobject(anyObject) {
    console.log(`username is ${anyObject.username} and price is${anyObject.prices}`);
}
handelobject(user)

//
const myNewArray = [100,200,300,500]
function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));