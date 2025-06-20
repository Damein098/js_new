function multipley(num) {
    return num * 5
}
//everything is an object in js
multipley.power = 2
// console.log(multipley(5));
// console.log(multipley.power);
// console.log(multipley.prototype);


function creatuser(username,score){
    this.username = username
    this.score = score
}

creatuser.prototype.increment = function () {
    this.score++
}

creatuser.prototype.printme = function () {
    console.log(`score is ${this.score}`);
    
}
const cofe = new  creatuser("damien",50)
const tea = new creatuser("tea",500)

// cofe.printme()
// tea.printme()

/////prototype


// let myname = "damien     "


// console.log(myname.truelength);
let heropower = {
    thor:"hammer",
    spiderman:"webs",

    getspiderpower:function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}
Object.prototype.damien = function(){
    console.log(`damien is present in all objects`);
    
}


// heropower.damien()
heropower.damien()
//call
//



