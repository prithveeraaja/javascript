// singleton 
//object.create


// object literals 

const mySym = Symbol("key1") //define symbol

const JsUser = {
    name:"Hitesh",
    "full name" : "Hitesh choudhary",
    [mySym] : "myKey1", // initialize with [] bracket
    age:  18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"]); // we cannot access by dot operator

console.log(JsUser[mySym]);

JsUser.email = "prithvi@.com"
Object.freeze(JsUser) // we can lock the object

JsUser.email = "xxx@.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
    
}

console.log(JsUser.greeting()); // undefined



