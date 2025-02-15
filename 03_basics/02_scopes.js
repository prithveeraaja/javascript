// var c = 300
let a = 300
if (true){
    let a = 10 
    const b = 20 
    // var c= 30
    console.log("INNER: ",a); // 10
    
}

console.log(a); // 300
//console.log(b);
//console.log(c); //30

function one (){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }

   // console.log(website); // we cannot acces child fun scope

    two()
}

one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username + website);    
    }

    //console.log(website);   
}

//console.log(username);


// +++++++++++++++++ interesting ++++++++++++++

console.log(addone(5)) 
function addone(num){
    return num+1
}



addTwo(5)       // gives errors due to method declaration
const addTwo = function(num){
    return num+2
}
