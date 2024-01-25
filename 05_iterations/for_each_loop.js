const coding = ["js","ruby","dsa","java","nodejs"]

coding.forEach(function(item){
    console.log(item);
})

// use arrow fun()
coding.forEach((item)=>{
    console.log(item);
})

//another way to use
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)