//function declaration
function saymyName(params) {
    console.log("tushar");
    console.log("parashar");
}

// function execution
//saymyName()

//function of adding two numbers
// function addtwonums(number1 , number2) {
//     console.log(number1 + number2);
// }
// // call function
// addtwonums(3,8)

// function addtwonums(number1 , number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

function loginUsername(username) {
    if (username === undefined) {
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUsername("tushar"));