function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

// sayMyName()  // we can print value of fun


// function addTwo (numb1, numb2){
//     console.log(numb1 + numb2);   
// }

function addTwo (numb1, numb2){
    let result =  numb1 + numb2
    return result   
}

const result = addTwo(3, 4)

console.log(result);

function loginUserMsg(username){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("hitesh"))
console.log(loginUserMsg())  // undefined

function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200, 400, 500));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)

handleObject({
    username : "Tom",
    price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500]));

