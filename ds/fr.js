const myObject ={
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"apple"
}

for (const key in myObject) {
//   console.log(`${key}for shrt is ${myObject[key]}`);
  
}


const myarr = [1,2,3,4,5]

for (const key in myarr) {
    // console.log(myarr[key]);
    
}


//for in doesnt work in maps


const coding = ["js","ruby","java","python"]

coding.forEach( function (item){//callback function doesnt have a name and paramaters have already values from the array
    // console.log(item);
    
} )
//using arrow operator
coding.forEach(  (value) => {
    // console.log(value);
    
})

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme())

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
} )
///used in databases**************************************
const mycoding = [
    {
        languagename:"javascript",
        langugefile:"js"
    },
    {
        languagename:"python",
        langugefile:"py"
    },
    {
        languagename:"cpp",
        langugefile:"c++"
    },
]


mycoding.forEach((item)=>{
    console.log(item.languagename);
    
})