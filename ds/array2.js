const marvelheroes = [ "ironman","spiderman","thor"]
const dcheroes = ["superman","flash","batman"]

// marvelheroes.push(dcheroes)

// console.log(marvelheroes)
// const allhero = marvelheroes.concat(dcheroes)

// console.log(allhero);

const allheroes = [...marvelheroes,...dcheroes]//spread uses all elements as one
console.log(allheroes);

const anotharr = [1,2,3,[4,5,6],7,[6,7,[4,6]]]
const realarray = anotharr.flat(Infinity)//dissolves all arrays into a single array use when there is an array inside of an array
// console.log(realarray);

console.log(Array.isArray("damien"))
console.log(Array.from("damien"))//creates a new array from an iterable or array-like object.
console.log(Array.from({name:"damien"}));//

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//Creates a new Array with a variable number of arguments



