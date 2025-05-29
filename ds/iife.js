//////////IMMEDIATELY INVOKED FUNCTION EXPRESSION
//to remove polluion of global scope we use iife
(function cofe(){//named iife
    console.log("db connected");
    
})();//add this ; to end the first iife


((name) =>{ //unnamed iife
    console.log(`db connected 2 ${name}`);
    
})('damien') //function definition ()//function call



