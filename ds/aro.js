const user = {//here current context we use this keyword to acces everything in const suer 
    username:"damien",
    price: 999,

    welcomemesaage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemesaage()
//  user.username ="Sam"
// user.welcomemesaage()

//  console.log();//empty object because we are  in node 

// function cofe(){
//     let username = "damien"
//     console.log(this.username);
    
// }
// cofe()

// const cofe = function (){
//     let username = "damien"
//      console.log(this.username);
// }

// cofe()


 const cofe =  () => {
     let username = "damien"
     console.log(this);
 }

//  cofe()

//arrow function

// const addtwo =  (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(4,6));

//implicit return,remove parenthesis

//  const addtwo =  (num1,num2)=>  num1+num2
 
//  console.log(addtwo(4,6));

 //when we use curly braces use  return keyword and when () no return
//  const addtwo =  (num1,num2) =>  ( num1 + num2 )
 const addtwo =  (num1,num2) =>( {username:"damien"})
 
 console.log(addtwo(4,6));


 const myarr = [2,4,6,5,9]

 myarr.forEach()





 