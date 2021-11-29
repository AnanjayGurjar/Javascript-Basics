class User{
    constructor(name, email){
        this.name = name;       
        this.email = email;
        //though the class doesn't have the property name, email but it'll create it, however we can always create the name and email in the class and use it.
    }
    #courseList = [];       //adding a prefix # will make the property private

    getInfo(){
        return {
            name: this.name,
            email: this.email,
        };
    }
    //note that we are not using keywords like var, function in the class
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCouseList(){
        return this.#courseList;
    }
    static login(){     //static properties are kind of private and is not available even to its child
        return "you are logged in";
    }
}

class SubAdmin extends User{

    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am sub admin here";
    }
}

// let ananjay = new User("Ananjay", "ananjaygurjar@mail.com");

module.exports = User;  //you can throw/export array, some of the classes, all of the classes, some of the functions etc

const rock = new User("rock", "rock@rock.com");
rock.enrollCourse("Angular");
console.log(rock.getCouseList());
console.log(rock.courseList);   //now, these both lines give the same output then why we need this method

//the getter is used to access the private properties of a class

const tom = new SubAdmin("Tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
// console.log(tom.login());
console.log(tom.getInfo());