// singleton
/// object.create



// object literals :-

const mySym = Symbol("key1")

const JsUseer = {
    name : "somesh",
    "full name" : "Somesh Deshmukh",
    [mySym]:"mykey1",
    age : 24,
    location : "nanded",
    email : "more@123.com",
    isLoggedIn : false,
    lastLoginDays :["monday","Saturday"]
}

// console.log(JsUseer.email);
// console.log(JsUseer["email"]);
// console.log(JsUseer["full name"]);
// console.log(JsUseer[mySym]);

JsUseer.email = "somesh@s123.com"
// Object.freeze(JsUseer)
JsUseer.email = "somesh@s12chatgpt3.com"
// console.log(JsUseer);

JsUseer.greeting = function(){
    console.log("Hello Js User");
}
JsUseer.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUseer.greeting());
console.log(JsUseer.greetingTwo());

