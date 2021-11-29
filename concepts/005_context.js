sayHello();
function sayHello(){
    console.log("Hello");
}

/**The above code works fine unlike c/cpp for explaining that lets consider a example:
 * 
 * IN THE BROWSER
 * 
 * var myName = "Ananjay";
 * if(myName === window.myName){
 *      console.log("Statement is true");
 * }
 * 
 * the code will run fine and give the output as Statment is true
 * 
 * IN THE NODE
 * 
 * But the same code will throw refrence error: window not defined in case of node
 * That is because js has a bigger context(global context) , in which everything resides, in the case of browser its window
 * But in node global scope differs from "window" but there always is a global scope and that is the region the function written 
 * above is registered globally and can be accessed from anywhere
 */

/**Now there are two types of context available to use one is global and other is execution context. The execution context comes
 * with every line and go away but in case of function it will stay for the block of the code 
 */