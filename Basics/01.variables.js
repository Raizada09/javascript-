const accountId = "1234"
let accountEmail = "htc@google.com"
var accountPassword = "3468"
accountCity = "Haridwar"
let accountState;
//it is undefined

//accountId = "2" //not allowed

accountEmail="daddy@google.com"
accountPassword="gsj4"
accountCity="bengaluru"

/*
prefer not to use var due to issue in scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);