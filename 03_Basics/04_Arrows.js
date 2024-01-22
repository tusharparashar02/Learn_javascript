const user ={
    username: "tushar",
    prices: 666,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }

}
user.welcomeMessage()

// const chai = function(){
//     let username = "tushar"
//     console.log(this.username);
// }
//chai()


// const chai = () => {
//     let username = "tushar"
//     console.log(this.username);
// }
// chai()


// --------arrow function----------
//-------------------------------------
//method-1
// const addtwo = (num1,num2)=>{
//     return num1+num2
// }

//method-2
// const addtwo = (num1, num2) =>  num1+num2
// console.log(addtwo(3,5));

//method-3
//const addtwo = (num1, num2) =>  (num1+num2)
// console.log(addtwo(3,5));

// return object by using arrow fun
const addTwo = (num1, num2)=> ({username:"tushar"})