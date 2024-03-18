function saymyname(){
    console.log("s");
    console.log("o");
    console.log("m");
    console.log("a");

}
saymyname()

// function addtwonum(num1, num2){
//     console.log(num1 + num2);

// addtwonum(3, 4)
// addtwonum(3, "4")
// addtwonum(3, "a")


// function addtwonum(num1, num2){
    
    // let result = num1 + num2
    // return result

    // return num1 + num2
    

// }

// const result = addtwonum(3, 5)
// console.log("result:", result);

// function loginusermsg(username){

// function loginusermsg(username = "sam"){

    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// loginusermsg("somesh")

// console.log( loginusermsg("somesh"));
// console.log( loginusermsg(""));
// console.log( loginusermsg());


function calculatecartPrice(val1, val2, ...num1){

    return num1
}


// console.log(calculatecartPrice(200, 400, 500, 2000, 3000));

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const mynewArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([200, 400, 500,1000]));