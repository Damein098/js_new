// const user = {
//     username:"damien",
//     logincount: 8,
//     signedin: true,

//     getuserdetails: function () {
//         // console.log("got details from db");
//         console.log(`username ${this.username}`);
        
//     }
// }

//context helps talk in present thatswhy we use this keyword
// console.log(user.username);
// console.log(user.getuserdetails());


// const promiseone = new Promise()//new helps in creating new context a new constructor function
// const date = new Date()


function user(username,logincount,isloggedin){
   //variable this.username = username // what areu passsing
   this.logincount = logincount,
   this.isloggedin = isloggedin
   return this
}

const userone = new user("damien",10,true)
const usertwo =  new user("iiii",10,false)
console.log(usertwo);
console.log(usertwo);
