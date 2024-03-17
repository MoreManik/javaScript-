// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "soma@gmail.com",
    fullname : {
        userfullname: {
           firstname:"somesh",
           lastname : "choudhary" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users =[ 
    {
    id: 1,
    email: "somesh@gmail.com"
},
{
    id: 2,
    email: "more@gmail.com"
} ,
{
    id: 3,
    email: "manik@gmail.com"
}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));






