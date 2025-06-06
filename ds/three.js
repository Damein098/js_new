//for of
//array specific loops

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//maps   holds key value pairs and remembers the original insertion order of keys
//only keeps unique values and doest allow duplicates
const map = new Map()
map.set('in',"india")
map.set('us',"united stats of amrica")
map.set('jp',"japan")
map.set('in',"india")
// console.log(map);

for (const[key,value] of map) {
    console.log(key,'::',value);
    
}

const myObject = {
    'GAME1':'NFS',
    'GAME2':'COD',
    'GAME3':'SPIDERMAN'
}

for (const [key,value] of myObject) {//not iterable through forof loop
    // console.log(key,">>",value);
    
}

