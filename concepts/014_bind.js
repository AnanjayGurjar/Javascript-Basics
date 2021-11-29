//let's try borrowing a method from one object to another using bind keyword
const hitesh = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    courseCount: 3,
    getInfo: function() {
        console.log(`
            Name is ${this.firstName}
            last Name is ${this.lastName}
            & is registered in ${this.courseCount} courses
        `);
    },
}

const ananjay = {
    firstName: "Ananjay",
    lastName: "Gurjar",
    courseCount: 4,
}

//now what if we want to acces the getInfo method in ananjay
//here, we didn't hardcoded the values of the variables in the getInfo funtion but gave the refrence of it by using this keyword

var ananjayInfo = hitesh.getInfo.bind(ananjay);
//now bind always give refrence to the function and we have to run it.
ananjayInfo();

//or  hitesh.getInfo(ananjay)();

//Also, we can run the method directly using the 'call()' method in js

hitesh.getInfo.call(ananjay);


