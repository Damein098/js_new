

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
// console.log(loginusermessage())//undefined when nothing is passed

function calcartprice(val1,val2,...num1) {//rest operator...
    return num1
}

// console.log(calcartprice(200,400,500,2000,600))

//pass objects
const user = {
    username:"damien",
    prices:200
}
function handleobj(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobj(user)
//another method of passing objects
handleobj({
    username:"sam",
    price:500
})





const myarr = [200,500,600,800]

function returnvalue(getarray) {
    return getarray[3]
}

// console.log(returnvalue(myarr));
console.log(returnvalue([200,400,500,900]));
