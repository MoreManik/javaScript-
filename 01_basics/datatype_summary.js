// # Primitive

// 7  types : string , Number , Boolean , null, undefined , symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1234567n





// Reference (Non-Primitive)

// Types : Arrays , Objects , Functions

const heros = ["shaktiman","naagraj", "doga"]
let myObj = {
    name: "somesh",
    age : 24,

}
const myFunction = function (){
    console.log ("hello world");
}

console.log( typeof bigNumber);


//******************************************* */
 


//Stack (Primitive) - get copy of , Heap (Non-Primitive) -reference of original value
let myName = "soma"
let anothername = myName
anothername = "chaiaurcode"


console.log(myName);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "somesh@google.com"

console.log(userOne);
console.log(userTwo);
