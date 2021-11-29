var temperature =  20;
if(temperature<=20){
    console.log("It's pretty cold outside");
}else if(temperature>20 && temperature<30){
    console.log("Temperature is ok outside");
}else{
    console.log("It's pretty hot outside");
}

//ternary operator
var authenticated = true;
authenticated? console.log("Signout?") : console.log("Login/Signup");

//Switch-case
var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "sub-admin":
        console.log("You can create and delete the course");
        break;
    
    case "testprep":
        console.log("You can test the quality of courses and suggest changes");
        break;

    default:
        console.log("You can only browse and consume the course after buying");
        break;
}