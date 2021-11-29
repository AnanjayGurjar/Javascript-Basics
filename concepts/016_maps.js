var myMap = new Map();
myMap.set(0, "Uno");
myMap.set(1, "dos");
myMap.set(2, "Tres");
myMap.set(3, "Cuatro");

console.log(myMap);

//fetching values
for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`value is ${value}`);
}
//when using for of loop we first get key and then values
for(let [key, value] of myMap){
    console.log(`Key is ${key} and value is ${value}`);
}

//in for each, the loop is designed in such a way that it'll assume that you'll be doing something with values and not the indices(keys)
myMap.forEach( (key) => console.log(key));  //now though it says key here but it is working with the values 

//in case one want both of them, we must use value first and then key
myMap.forEach((v, k) => console.log(`${v} and ${k}`));
myMap.delete(2);
console.log(myMap);