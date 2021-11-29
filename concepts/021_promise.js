//now moving forward from the async file we want dos to finish it's task and only then the tres to execute
const uno = () =>{
    return "I am one";
};
// const dos =  () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// };

//I am one
//Undefined
//I am three

// const dos =  async() => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// };

//I am one
//Promise(undefined)
//I am three

//So,a promise is something which is going to have two states either it is going to be fulfilled or it is not going ot be fulfilled

//Now, how to write a promise
//https://api.chucknorris.io/
const dos =  async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("I am two");
            //reject("I am two");
        }, 3000);
    });
};

const tres = () => {
    return "I am three";
};

//the method must be asynchronous to make such calls
const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
    
    let valTwo = await dos();
    console.log(valTwo);

    let valThree =tres();
    console.log(valThree);
}

callMe();       