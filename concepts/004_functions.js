function sayHello(){
    console.log("Hello there");
}
sayHello();     //calling a function
sayHello;       //refrencing a function

function sayHelloArgument(name){
    console.log(`Hello ${name}`);
}
sayHelloArgument();     //Hello undefined
sayHelloArgument("Ananjay");        //Hello Ananjay
sayHelloArgument(12);       //Hello 12

function sayHelloReturn(){
    return "Hello from return function";
}
var returnValue = sayHelloReturn();
console.log(returnValue);

function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin and has all the access`;
//            break;    obviously break is not required when switch case returns some value
        case "sub-admin":
            return `${name} is sub-admin and has access to write and read the files`;
    
        case 'testprep':
            return `${name} has access to read and write the files in the test mode`;
        default:
            return `${name} is unregistered user and can only view files`
    }
}

console.log(getUserRole("Ananjay", "admin"));
console.log(getUserRole("Rahul", "testprep"));
console.log(getUserRole("Rohit", "abc"));

/*******STORING THE FUNCTION TO A VARIABLE******** */
var getUser = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin and has all the access`;
//            break;    obviously break is not required when switch case returns some value
        case "sub-admin":
            return `${name} is sub-admin and has access to write and read the files`;
    
        case 'testprep':
            return `${name} has access to read and write the files in the test mode`;
        default:
            return `${name} is unregistered user and can only view files`
    }
}
console.log(getUser("Jay", "admin"));


/******* WRITING A ARROW FUNCTION ****** */
var arrowFunction = (name, role) =>{
    switch (role) {
        case "admin":
            return `${name} is admin and has all the access`;
//            break;    obviously break is not required when switch case returns some value
        case "sub-admin":
            return `${name} is sub-admin and has access to write and read the files`;
    
        case 'testprep':
            return `${name} has access to read and write the files in the test mode`;
        default:
            return `${name} is unregistered user and can only view files`
    }
}
console.log(arrowFunction("ananjay", "sub-admin"));
