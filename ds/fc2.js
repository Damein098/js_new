///scopes 

let a  = 300 // global scope

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner  ",a);
    
}//scopes when it comes with if else function
//block scope

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "damien"

    function two()
{
    const website = "yt"
    console.log(username);
    
 }//console.log(website);
two()

}

// one()//two can access values from one



if(true){
    const username = "damien"
    if(username === "damien"){
        const website = "  yt"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

///+++++++++++++++++++++++++++++++++++++++++++++++ concept
console.log(addone(5))
function addone(num) {
    return num +1
}

addtwo(5)//hoisting error because this variable holds a function 
const addtwo = function(num){
    return num +2
}

