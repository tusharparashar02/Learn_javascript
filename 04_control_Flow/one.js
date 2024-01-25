// -----//if else declaration

const temp = 41
if(temp < 50){
    console.log("less thean 50");
}else{
    console.log("greater than 50");
}


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// ----implicit scope
const balance = 1000
if(balance >500) console.log("test");

// const userLoggedin = true
// const debitcard = true 
// if(userLoggedin && debitcard && 2==3){
//     console.log("allow to buy cource");
// }

// switch case
const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("not match");
        break;
}