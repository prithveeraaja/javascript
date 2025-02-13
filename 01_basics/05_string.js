 const name = "hitesh"
 const repoCount = 50

 // console.log(name + repoCount + "Value");  ****string concanitation 

 console.log(`Hello my name is ${name} and my repo counnt is ${repoCount}`); //*** *

 const gameName = new String('Hitesh-hc-tc-pc')

 console.log(gameName[0]); // H
 console.log(gameName.__proto__); // {}


 console.log(gameName.length); //6
 console.log(gameName.toUpperCase()); // HITESH
 console.log(gameName.charAt(2)); //t
 console.log(gameName.indexOf('s')); //4

const newString = gameName.substring(0,4) //it will starts from 0 always
console.log(newString); //Hite

 const anotherString = gameName.slice(-8,4)
console.log(anotherString); // ite

const newStringOne = " hitesh  "
console.log(newStringOne.trim()); // Remove spaces  trimStart() or trimEnd()

const url = "https://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20', '-'))  // %20 => -
console.log(url.includes('sundar'));  // false

console.log(gameName.split('-')); // Hitesh , hc, tc, pc




 
 
 
 
 
 