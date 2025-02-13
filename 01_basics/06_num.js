const score = 400
console.log(score); // 400


const balance = new Number(100)
console.log(balance);  // number:100

console.log(balance.toString()); //100
console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00


const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // 23.9 or 124 or 1.12e+3(1123.896)

const hundrads = 10000000
console.log(hundrads.toLocaleString('en-IN'));



// ++++++++++++++ MATHS ++++++++++++++++++

console.log(Math); // object
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
  

console.log(Math.random());  // values from 0 to 1
console.log((Math.random()*10) + 1); // 3.4566652
console.log(Math.floor(Math.random()*10) + 1); // 3 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min); // 10 to 20







 



