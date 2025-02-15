const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

// user.welcomeMessage() // hitesh welcome to website
// user.username = "sam"
// user.welcomeMessage() // sam welcome to website



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // undefined
// }

// chai()

// const chai = function (){
//     let username = "hitesh"
//   console.log(this.username);   // undefined
// }

const chai = () => {
    let username = "hitesh"
  console.log(this);   // undefined
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

const addTwo = (num1, num2) => num1 + num2 

console.log(addTwo(3, 4));


