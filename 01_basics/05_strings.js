// "hello" + "world"

const name = "somesh"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my Name is ${name} and my repo count is ${repocount}`);


const gameName = new String('Somesh-deshmukh-abc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


const newString = gameName.substring(0,4)
console.log(newString);


// const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "    soma    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://somesh.com/somesh%20deshmukh"
console.log(url.replace('%20', '-'))

console.log(url.includes('somesh'));

console.log(gameName.split('-'));