//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sim"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123abc', name: 'sim', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // "Hitesh"

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2} // mostly used for combine 
console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: inst} = course

console.log(courseInstructor); // "Hitesh"
console.log(inst); // "Hitesh"