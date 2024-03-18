

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console.log(username);
    }

    two()


}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh")

    {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ========= interesting =========================


addone(5) //this will work
function addone(num){
    return num + 1
}

addTwo(5) //this will not work
const addTwo = function(num){
    return num + 2
}