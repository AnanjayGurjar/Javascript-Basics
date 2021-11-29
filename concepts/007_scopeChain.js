/**Basically talk about the scope, that is if a variable is declared in global scope and inside the function which will 
 * be used and why? We will be considering various cases here
 */
var name = "Ananjay";
console.log("Name is ", name);


function sayName(){

    console.log("Name in the function is ", name);
}
sayName();
function sayName2(){
    var name = "hitesh";
    console.log("Name in line 14 is ", name);
    innerName()

    function innerName(){
        console.log("Name in line 18 is ", name);
    }
}
sayName2();

/**One can consider the analogy as if the inner function is kid, with the outside funtion its dad and the global variable as its grandparents, now if all of the family members have there candy(variable name in this case) they will eat but if the kid doesn't have  
his candy, he'll ask his nearest parents(dad), here dad can't refuse the kid and at the same time if the dad doesn't have the candy kid will take the same from grandparent. Similiary, if the parent doesn't have a candy he can only ask his dad(grandparent) and not the kid
*/