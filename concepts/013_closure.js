function init(){
    var firstName = "ananjay";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;        //passing the refrence of the function here
}

var value = init();
//here the refrence of the firstName is still not deleted
value();

function doAdditon(x){
    return function(y){
        return x + y;
    }
}
var add5 = doAdditon(5);        //this simply returns the refrence of the function inside it
var sum = add5(4);
var sum2 = doAdditon(5)(4);

console.log(sum);
console.log(sum2);
