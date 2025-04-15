const accountId = 14453
let accountemail = "debo@gmail.com"
var accountpass = "12345"
accountCity = "jaipur"
let accountstate;
// accountId =2 not allowed to change js had a block scope problem

accountemail ="hc@email.com"
accountpass = "212121"
accountCity ="Bengaluru"
console.log(accountId);
//* 
// account state is undefined because we didnt define a value to it 
// prefer not to use var because of issue in block scope and functional scope * //
console.table([accountId,accountemail,accountpass,accountCity,accountstate])
