# Chapter 10 - User Input

```jsx
let names = prompt("Please enter your name");
if(names){
    console.log(names.lenght);
    console.log(names.trim().length);
    console.log(names.trim());
} else {
    console.log("You don't enter your name")
}
```

We are taking the name from the user and then logging in it to the console.

### Prompt - it show a prompt and takes an user input

### confirm - it will ask you ok or cancel and take a bool input