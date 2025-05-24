//singleton

//object literals 
//Object.create//constructor method
const mysym = Symbol("key1")//create a symbol


const jsuser = {
    name:"damien",
    "full name":"damien wayne",
    [mysym]:"mykey1",//pass it a a symbol
    age:21,
    location:"nyc",
    email:"fsadaadada",
    isloggedin:["moday","sunday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);


jsuser.email = "damien@gmgm.com"
// Object.freeze(jsuser)//freeze so u cant alter anything 
jsuser.email = "dsdsadadmicrosoft.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}



jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());