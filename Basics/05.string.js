const name = "Nirbhay"
const repoCount = 1

// console.log(name + repoCount + "value");  --> it's not a good pratice to use this syntax

// good syntax

//console.log(`Hello my is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('nirbhay-kumar')
//console.log(gameName[7]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase);
//console.log(gameName.indexOf('r'));
//console.log(gameName.charAt(4));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

