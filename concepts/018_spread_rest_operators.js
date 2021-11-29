//  ...args this is a rest operator and this is a spread operator
var myObj = {};
Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});
console.log(myObj);

function sumOne(a, b){
    return a+b;
}

var arr = [5, 4];
console.log(5, 4, 1);          //here it'll ignore the extra parameter and gives the result as 9
console.log(sumOne(arr));       //here it won't work as it is expecting two separate value(also, the type of the data doesn't really match) and doesn't know what to do with it and will print the values

//now in the above case when you don't want to change the function defination you can use spread operator which basically denotes that it'll spread the values, obviously if array contains nubmer of values more than what function is expecting it'll simply ignore the extra values

console.log(sumOne(...arr));        //spread operator


//now let us assume we want to use a function but not really sure of the number of the parameters we will be using when we'll call it

function sumTwo(a, b, ...args){       //this is rest operator
    //expect that this args is going to be an array
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(10, 20, 32, 12, 8, 7));