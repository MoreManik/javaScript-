const user = {
    username: "hitesh",
    price: 999,

    welcomeMassage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "somesh"
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()



// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


//---Basic Arrow Function----
// const addTwo = (num1,num2 ) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

//------Implicit Return------
// If you rap it in the {} then you have to write Return

// const addTwo = (num1,num2 ) => num1 + num2

// const addTwo = (num1,num2 ) => (num1 + num2)

// object return 
const addTwo = (num1,num2 ) => ({username: "hitesh"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 6, 7, 8]
// myArray.forEach()