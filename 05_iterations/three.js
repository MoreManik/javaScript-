// For of

//["", "", ""]
//[{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
    
// }
// const greetings = "hello world!"
// for (const greet of greetings){
//     if (greet == " ") {
//         continue
        
//     }
//     console.log(`Each char is ${greet}`);
// }



// ==========Maps=========
//it has unique value & in oder  Means it does not get duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United Nation of America")
map.set('fr', "france")
map.set('IN', "India")

console.log(map);

// using forof:-

// for (const key of map) {
//     console.log(key);
// }


// for printing keys and values by destructuring array:-

for (const [key, value] of map) {
    console.log(key , ':-',  value);
    
}



