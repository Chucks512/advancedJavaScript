/*

Ask the user to enter a name, 
using the switch statement to return 
a confirmation that the user is a friend 
if the name selected is known in the case statements. 
You can add a default response 
that you don't know the person 
if it's an unknown name.
Output the result into the console.

*/
userName = "";
userName = prompt("enter name")
switch (userName.toLowerCase()) {
    case "sheryl":
        console.log(userName + " identified");
        break;
    case "courtney":
        console.log(userName + " identified");
        break;
    case "arnold":
        console.log(userName + " identified");
        break;
    case "sandile":
        console.log(userName + " identified");
        break;
    default:
        console.log(userName + " unknown");
        break;
}