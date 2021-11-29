/*
    undefined   -> val user;
    null        -> fetching tempurature from api and it fails
    0
    ''
    NaN
*/
console.log("2" + 2);
var user = "2";
if(2==user){
    //loose operator
    console.log("The == works on different datatype");
}
if(2 === user){
    //doesn't work as it is not loose
    console.log("The === works on differnt datatype");
}