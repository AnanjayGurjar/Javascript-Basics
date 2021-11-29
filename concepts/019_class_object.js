//import User from "./classjs"  this is one way but not going to work here, but this synthax is used in many frameworks, libraries so remeber this
const User = require("./classjs");
const ananjay = new User("Ananjay", "ananjay@email.com");
console.log(ananjay.getInfo());
ananjay.enrollCourse("Android devolpment");
ananjay.enrollCourse("pro-backend");
console.log(ananjay.getCouseList());