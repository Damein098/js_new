//array

const myarr = [0,1,2,3,4,5]//resizable mix of datatypes 
console.log(myarr[0]);
//shallow copy
//share same reference point means change happens in original array

//deep copy
//do not share same reference point means chnge happens in copy
const myheroes = ["ironman","spiderman"]
const myarr2 = new Array(1,2,3,4)

//array methods 

// myarr.push(6)
// myarr.push(8)
// myarr.pop()

myarr.unshift(9)  //adds values at first position
myarr.shift() //removes first value
console.log(myarr);


console.log(myarr.indexOf(3))
// const newarr = myarr.join() //joins arraay and converts into string 
// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);



//interview
//slice,splice

console.log("a",myarr);

const myn1  = myarr.slice(1,3)//doesnt chnge the original array 
console.log(myn1)//op 1,2
console.log("b",myarr);

const myn2 = myarr.splice(1,3)//changes the original array 
console.log("c",myarr);
console.log(myn2);//op 1 2 3


