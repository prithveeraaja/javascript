// for each 

const coding = ["js", "rb", "py", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val); 
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach( (item , index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName: "javascript",
        lagFile: "js"
    },
    {
        langName: "java",
        lagFile: "java"
    },
    {
        langName: "python",
        lagFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )