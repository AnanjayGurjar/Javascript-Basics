//whatever the data type is in the rhs, similiar data type should be in the lhs then probably you can do the destructuring
const user = ["hitesh", 3, "admin"];
var role = user[2];
var name = user[0];
console.log(role);      
//consider the following situation

var [userName, courseCount, userRole] = user;
console.log(userRole);

//destructuring of data on objects

const MyUser = {
    objectName: "Ananjay",
    objectCourseCount: 5,
    objectRole: "Admin",
}

const {objectName, objectCourseCount, objectRole} = MyUser;     //in order to destructure the name of the variables must also match, if used different we will get undefined out of it
console.log(objectRole);