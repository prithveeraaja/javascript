// for of  gives values

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    console.log(num); 
}

const greeting = "Hello world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('Fr', "France")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value); 
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value); 
// }

