const useremail = "Damien@ai"

if(useremail){
    console.log("got user email");
}else{
    console.log("dont have user email");
    
}


//falsy values 
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'fasle'," ",[],{},function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}





