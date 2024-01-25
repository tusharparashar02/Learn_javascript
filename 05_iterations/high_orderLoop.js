//1- for of Loop
//--------------------------------------------
// declaration:-
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}

// const greeting = "hello world"
// for (const greet of greeting) {
//     console.log(`each char is${greet}`);
// }

//-----> Maps<---------
//----------------------------------------------
const map = new Map()
map.set('In', "india")
map.set('usa', "amarica")
console.log(map);

for( const [key, value] of map){
    console.log(key , ':-', value);
}

//-----> This ex. give error
// const myObject = {
//     'game1': 'nfs',
//     'game2': 'spiderman'
// }
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

//2- 'for in Loop'
//----------------------------------------
// ---> 'for in'- use for objects
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}