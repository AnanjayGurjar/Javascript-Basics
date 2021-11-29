var user = {
    firstName: "Ananjay",
    lastName: "Gurjar",
    role: "Admin",
    loginCount: 20,
    isLoggedIn: true,       //comma may or may not be here,it's fine
}

console.log(user.firstName);
//update the value
user.loginCount = 15;
console.log(user);

//using funtion inside the object

var user2 = {
    name: "Maaz",
    role: "sub-admin",
    loginCount: 12,
    isLoggedIn: false,
    courseList: [],
    // buyCourse2: ((courseName) => {
    //     // courseList.push[courseName];     this way won't work as you need to refer to courseList
    //     this.courseList.push(courseName);
    // }),
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    }
}

user2.buyCourse("Android Development");
console.log(user2.courseList);
