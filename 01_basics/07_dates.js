// Dates => object

let myDate = new Date()
console.log(myDate);                      // 2025-02-13T14:32:28.884Z
console.log(myDate.toString());         // Thu Feb 13 2025 14:33:38 GMT+0000
console.log(myDate.toDateString());      //Thu Feb 13 2025
console.log(myDate.toJSON());            //2025-02-13T14:52:21.604Z
console.log(myDate.toLocaleString());    // 2/13/2025, 2:52:21 PM
console.log(myDate.toLocaleDateString());// 2/13/2025
console.log(myDate.toLocaleTimeString()); // 2:52:21 PM

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate1 = new Date("2023-01-23")
console.log(myCreatedDate1.toLocaleDateString()); // 1/23/2023


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1739458986305
console.log(myCreatedDate.getTime()); // 1674432000000  time from 1 jan 1917

console.log(Math.floor(Date.now()/1000)); // 1739459218  time in second


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday : "long",
    
})















