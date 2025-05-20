//primitive data types 
// 7types  string number boolean null undefined symbol  bigint


 const score = 100
 const scorevalue = 100.3

 const isloggedin = false 
 const outsidetemp = null
 let useremail; //let useremail = undefined
 const id = Symbol('123')
 const anotherid = Symbol('123')

 console .log(id == anotherid)
 const bigint = 12213213131311313131n




//reference types (non primitive)

// array objects functions 

const heroes = ["ironman","hulk","thor"]
let myobj=
{
    name:"damien",
    age:22,
}

const myfunc = function(){
    console.log("ehllo world")
}

console.log(typeof myfunc)


//Primitive datatypes:
//String - string
//Number - number
//Boolean - Boolean
//Null - object(****)
//Undefined - undefined
//BigInt - bigint

//Non-primitive datatypes:
//Array - object
//Function - function(object)
//Object - object


//stack(primitive)->change happens in copy   , heap(non-primitive)->changes happen in reference original value

let myname = "damien"

let anothername = myname
anothername = "Adrien"

console.log(anothername)
console.log(myname)

let user1 = {
    email:"user@gmail.com",
    upi:"user@ybl.com"
}

let user2 = user1
user2.email = "damien@google.com"
console.log(user1.email);
console.log(user2.email);