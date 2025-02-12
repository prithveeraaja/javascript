//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);


console.log("2" > 1);  // true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false convert NaN
console.log(null >= 0); //true convet to 0

/* the reasomn is that an equality check == and comparisons > < >= <= work differently

comparision convert nulll to a number,treating it ass 0.
thats why (3) null>=0 is true and (1) null>0 is false.

*/

// == in that it only check value 

// === int that it check data type and value also

console.log("2" === 2); //false




