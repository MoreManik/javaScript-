// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log (`User power: ${power}`);

// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"); //implicit scope

// if (balance < 500) {
//     console.log("less than");

// }else if (balance < 750) {
//     console.log("less than 750");

// }else if (balance < 950) {
//     console.log("less than 950");

// }
// else{
//     console.log("less than 1200");
// }




const userLoggedIn = true
const debitCard  = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}


