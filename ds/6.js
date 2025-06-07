//const coding = ["js","py","cpp","java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item                              
// })


// console.log(values);

//const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num) =>{ return  num> 4})//write return when u use {}
//const newnums = mynums.filter((num) =>  num> 4)
// const newnums =[]

// mynums.forEach( (num) => {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })


// console.log(newnums);


// const mynums = [1,2,3,4,5,6,7,8,9,10]

//const newnums = mynums.map((num) => num+10)
// const newnums = mynums.forEach((num) => {return num+10})
// console.log(newnums);
//chaining method////////////////////////////////////////////////////////////
// const mynumrs = mynums
//     .map((num) => num *10 )
//     .map((num) =>num + 1)
//     .filter((num)=> num >=40 )
// console.log(mynumrs);
//reduce

const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc::${acc} and curr::${currval}`);
    
//     return acc +currval
// },0)//send this value to accumulator



const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);






