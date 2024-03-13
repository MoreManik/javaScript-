const accountId = 144553
let accountEmail = "moremanik123@gmail.com"
var accountPassword = "1234"
accountCity = "nanded"
let accountState;

//accountId = 2  //not allowed

accountEmail = "abc@kl.com"
accountPassword = "212121"
accountCity = "Nanded"

console.log(accountId);

/*
Prefer not to use var
beacase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])