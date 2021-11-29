//lets talk about the var, let and const keyword in javascript. Which to use when and why there is so many words to declare the variable

//in frontend part we need a language which is much more lineant, and doesn't throw error at every place. But now js is used at places where it was never designed to use. In backend we do want to get error's

console.log(name);      //no error just undefined
var name = "hitesh";

// console.log(let_name);
// let let_name = "Ananjay";

if(true){
    var lastName = "Gurjar";
    let let_lastName = "Gurjar";
    
}
console.log(lastName);      //still works
console.log(let_lastName);      //works same as the normal language
