/**Remember two basic statment regarding the execution context in javascript
 * 1. function declaration are scanned and are made available
 * 2. variable declaration are scanned and made unavailable
 * 
 * Consider the examples to understand the same
 */

sayName();          //function is scanned and made available for global scope
function sayName(){
    var name = "Ananjay";
    console.log(name);
}
console.log(x);     //variable is made undefined

