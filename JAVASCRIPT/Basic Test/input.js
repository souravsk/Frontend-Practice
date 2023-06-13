let names = prompt("Please enter your name");
if(names){
    console.log(names.lenght);
    console.log(names.trim().length);
    console.log(names.trim());
} else {
    console.log("You don't enter your name")
}