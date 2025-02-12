// Primitive => call by value it will give copy of value

// 7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 3456235896456245552n


/* 

JavaScript is a dynamic language, not a static language. This means that JavaScript automatically determines the type of a variable during runtime, based on the value of the variable

*/


// Referance (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj={
    name : "Prithvi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");  
}

console.log(typeof bigNumber);

/*
undefined = undefined
null = object
Boolean = boolean
Number = number
String = string
Function = function obj
Object = object
BigInt = bigint

*/

