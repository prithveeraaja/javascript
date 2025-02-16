//for in gives key and values

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`); 
}


const a = ["js", "rb", "py", "java"]

for (const key in a) {
    console.log(a[key]);
}