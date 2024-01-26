//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
//in order, passing in the return value from the calculation on the preceding element. 
//The final result of running the reducer across all elements of the array is a single value.

const myNums = [1,2,3,4,5]
// const myTotal = myNums.reduce(function (accumelator, currentval){
//     console.log(`accumelator: ${accumelator} and currentval: ${currentval}`);
//     return accumelator + currentval
// }, 3)

const myTotal = myNums.reduce((acc, curr)=> acc+curr , 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "mobile dev cource",
        price: 4566
    },
    {
        itemName : "Andriod  cource",
        price: 4589
    },
    {
        itemName : "DSA cource",
        price: 7566
    },
]
const priceTOpay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTOpay);