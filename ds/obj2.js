// const tinderuser = new Object()  //singleton object
const tinderuser = {} //non-singleton object

 
tinderuser.id = "123abc"
tinderuser.name = "sammir"
tinderuser.isloggedin = false
// console.log(tinderuser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"damien"
            ,lastname:"smith"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
const obj1 = {1:"A",2:"B"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = Object.assign({},obj1,obj2,obj4) //merging two objects 
const obj3 = {...obj1,...obj2} //merging two objects using spread operator
console.log(obj3);
//database values in arrays
const users = [
    {
        id:1,
        name:"sammir",
        isloggedin:true
    },
    {
        id:2,
        name:"damien",
        isloggedin:false
    },
    {
        id:3,
        name:"john",
        isloggedin:true
    }
]
users[1].name
console.log(tinderuser);

console.log(Object.keys(tinderuser)); //returns keys of the object in array datatype
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isloggedin")); //returns true if the object has the property


