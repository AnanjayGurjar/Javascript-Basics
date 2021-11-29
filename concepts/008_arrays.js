var countries = ["India", "China", "Russia", "Australia", "USA"];
//another way
var states = new Array("Rajasthan", "Karnataka", "UttarPradesh", "Bihar", "Assam")

var differentDataTypes = ["String", 12, true, 'a'];     //this is perfectly valid in js but not a good practice
console.log(differentDataTypes);
console.log(countries[2]);

//countries.length will give the length of the array as usual

//pop , shift and unshift function in array

states.pop();
console.log(states);        //remove element from last of the array

states.unshift("Gujrat", "Maharashtra");        //add new element in the start of the array
console.log(states);

countries.shift();
console.log(countries);     //remove element from the start of the array

console.log(countries.indexOf("Australia"));
console.log(Array.from("Ananjay"));         //conver a string to the array of characters