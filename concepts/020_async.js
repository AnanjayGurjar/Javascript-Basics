const uno = () =>{
    console.log("I am one");
};
const dos = () => {
    setTimeout(() => {
        console.log("Woohooo");
    }, 3000)
    console.log("I am two");
};
const tres = () => {
    console.log("I am three");
}

uno();
dos();
tres();

/*output:
    I am one
    I am two
    I am three  
    ...waits for three seconds
    Woohooo*/

