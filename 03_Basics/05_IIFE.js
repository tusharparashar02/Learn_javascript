// Immediately invoked function expressions (IIFE)

(function tushar(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//NOTE:- IIfe is used to remove the polution of global scope

( (name) =>{
    console.log(`DB CONNECTED TWO`);
})("tushar");
