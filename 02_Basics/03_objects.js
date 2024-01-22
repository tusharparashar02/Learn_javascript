// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

//declaration
const JsUser = {
    name: "tushar",
    "fullName": "tushar parashar",
    [mySym] : "mykey1",
    age: 19,
    location: "hathras",
    email: "tushar@gmail.com",
    isLocation: false,
    lastLoginDays: ["monday", "sunday"]
}

// access object method-1
console.log(JsUser.age);// this is not the right way to access
//problem in this method is if we declare "fullName" so it was not access.


//so right way to access
console.log(JsUser["name"]);
console.log(JsUser["fullName"]);
//here declare the symbol and add them into object
console.log(JsUser[mySym]);

// to override the value or change the value use '=' operator
JsUser.email = "tushar@chatgpt.com"
// if we freeze the value so it cant further change
//Object.freeze(JsUser)
// example to change the value but it cant be change because we freeze the value
JsUser.email = "tushar@gla.com"
console.log(JsUser);

// add greeting with object
JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.fullName}`);
}
console.log(JsUser.greetingTwo());