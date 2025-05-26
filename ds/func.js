

function saymyname(){
    console.log("d");
    console.log("a");
    console.log("m");
    console.log("i");
    console.log("e");
    console.log("n");
}

// saymyname()


// function add2nos(number1,number2) {//parameters
//    console.log( number1 + number2);
// }

function add2nos(number1,number2) {//parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = add2nos(3,5)
// add2nos(3,"a")//arguments

// console.log(result);

function loginusermessage(username = "Sam") {//default vallue
    if(username === undefined){//or we can write (!username)
        console.log("please enter a username");
        return 
    }
    return`${username} just logged in`
}


// console.log(loginusermessage("damien"))
console.log(loginusermessage())//undefined when nothing is passed
