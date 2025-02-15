const userEmail = "hithesh.ai"

if (userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys().length===0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10             // 5
// val1 = undefined ?? 10    //10
// val1 = null ?? 15         //15

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(("less than 80")) : console.log("more than 80")

