///date is calculated in miliseconds
// let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);


//let createddate = new Date(2026 , 0 ,26, 5 ,3)
let createddate = new Date("01-14-2027")
//console.log(createddate.toDateString());
// console.log(createddate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp)//op in miliseconds 
// console.log(createddate.getTime());

//console.log(Math.floor(Date.now()/1000))//seconds

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth());
console.log(newdate.getDay());

//`${newdate.getDay()}`


newdate.toLocaleString('default',{
    weekday:"long",
    timeZone:'',
    
})