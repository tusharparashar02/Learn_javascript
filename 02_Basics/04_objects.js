//declaration object with the help of singleton or constructor

// non singleton object declaration
const tinderUser1 ={}

//singleton object declaration
const tinderUser = new Object()
tinderUser.id = "12345"
tinderUser.name = "tushar"
tinderUser.isLoggedOf = false

console.log(tinderUser);

const regularUser = {
    email: "tushar@gla.com",
    fullname: {
        userFullname: {
            firstname: "tushar",
            lastname: "parashar"
        }
    }
}
console.log(regularUser.fullname);

//concatenate objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1 , obj2}
console.log(obj3);
// use spread method to concatenate
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// intro to JSON
// {
//     "name": "tushar",
//     coursename : "B.tech cse",
//     price: "free"
// }