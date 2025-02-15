//if
const balance = 1000 

if (balance > 5000) console.log("test");

if(balance < 500){
    console.log("less than");

}else if(balance < 750){
    console.log("less than 750");
    
}
else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFrom = false

if (userLoggedIn && debitCard ) {
    console.log("allow to buy");
    
}