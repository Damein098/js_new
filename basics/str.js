const name = "Damien"
const repocount = 50
//console.log(name + repocount + "value");
//string interpolation used more in modern world uses ``

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gamename = new String('damie-ne')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('m'));

const newstring = gamename.substring(0,4)
console.log(newstring)

const anostring = gamename.slice(-8,4)
console.log(anostring)

const newstringone = "  damien  "
console.log(newstringone);
console.log(newstringone.trim());//removes gaps and spaces

const url = "https://gogofle.com//fdfsffs/fd%21fsfsd"
console.log(url.replace('%21','-'))

console.log(url.includes('damien'));

