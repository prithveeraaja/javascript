// Map
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.map( (num) => { return num + 10})

const newNums = myNum
                .map((num) => num * 10) // 10 20 30 40 ......
                .map((num) => num + 1)  // 11 21 31 41 ....
                .filter( (num) => num >= 40) // 41 51 61 ..... 

console.log(newNums);


