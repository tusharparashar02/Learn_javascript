const promiseOne = new Promise(function (resolve , reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
    }, 1000);
})
// .then -> it is directly connected to resolve.
promiseOne.then(function(){
    console.log("promise consume");
})

new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("asynac task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("asynac 2 resolved");
})

const promisesThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username: "tushar", email : "tushar@gamil.com"})
    }, 1000)
})
promisesThree.then(function(user){
    console.log(user);
})

const promisesfour = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username : "tushar", passward: "25555"})
        } else {
            reject('Error: somethig went wrong')
        }
    }, 1000)
})
// channing
promisesfour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("finnaly the promise is reject or resolved");)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/tushar')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
