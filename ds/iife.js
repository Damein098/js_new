//////////IMMEDIATELY INVOKED FUNCTION EXPRESSION
//to remove polluion of global scope we use iife
(function cofe(){//named iife
    console.log("db connected");
    
})();//add this ; to end the first iife


((name) =>{ //unnamed iife
    console.log(`db connected 2 ${name}`);
    
})('damien') //function definition ()//function call


//how code is executed in javascript


//code -->> global execution context === (stored in )this

//function execution context 
//eval execution context

//code runs in 2 phases memory creation phase(memory allocation) and execution phase

//1.global execution ==this
//2.memory phase val1=undefined
//3.execution phase val1=10  function addnum====new variable environment+execution thread
//4.again memory phase and execution phase for new variable environment
//it deletes itself once it completes its work new variable environment
//call stack acts like a stack and uses LIFO rule




