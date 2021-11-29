/**Let's write a function to determine if the given number is even or not in different ways */

//WAY 1: Better than using if-else but still boring

// function isEven(element){
//     return element%2 === 0;
// }
// console.log(isEven(8));

//WAY2: By declaring a variable

// var isEven = function(element){
//     return element%2 === 0;
// }
// console.log(isEven(15));

//WAY 3: Using Arrow Function

var isEven = (element) =>{
    return element%2 === 0;
}
console.log(isEven(7));
//let's write the above funtion without using return keyword

var isEvenWithouReturn = (element) =>{
    element%2 === 0;        //it gives undefined hence we have to write return statement
}
console.log(isEvenWithouReturn(8));

console.log([2, 4, 6, 8].every(isEven));        //.every(conditon) check the condition for each element of the array, and if it's true for each it'll return true otherwise false, it's a type of predefined callback funtion for arrays

//WAY 4: The callback function

var result = [2, 4, 6, 8].every((e) => {
    return e%2 === 0         //basic format () => {}
});     
console.log(result);  

//what if you don't want to add a return statement in callback funtion
//format is easy just don't apply curley bracket i.e. (() => _) or (() => ())


var result2 = [2, 5, 6, 8].every((e) => e%2 == 0)
console.log(result2);



