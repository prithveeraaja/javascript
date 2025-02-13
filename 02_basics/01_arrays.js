// arrays 

const myArray = [0, 1, 2, 3, 4, 5]
const nyHeros = ["shakti", "naaag"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArray[1]);

// Array methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

myArr2.unshift(9)  // add to first idx 
myArr2.shift() // remove from fist idx

console.log(myArr2.includes(9)); // give ans in boolean
console.log(myArr2.indexOf(9)); // give idx 

console.log(myArr2);

const newArr = myArr2.join() // add all element into a string

console.log(myArr2); // [0,1,2,2]
console.log(newArr); // String 0,1,2,2


// slice, splice

console.log("A ",myArr2);

const myn1 = myArr2.slice(1,3) // slice dont manipulate

console.log(myn1);
console.log("B ", myArr2);


const myn2 = myArr2.splice(1,3) // splice manipulate the array

console.log(myn2);
console.log("c ", myArr2);








