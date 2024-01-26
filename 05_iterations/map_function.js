const my_number = [1,2,3,4,5,6,48,9,56,5]

// const newnumber = my_number.map((num)=>{
//     return num + 10
// // })
// console.log(newnumber);

//chaning----:

const newNums = my_number
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >=40)
console.log(newNums);
