# Chapter 26 - Fetch/Async/Await

# JavaScript Callbacks

# *"I will call back later!"*

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

## Function Sequence

JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

This example will end up displaying "Goodbye":

Example

```jsx
function myFirst() {  
	myDisplayer("Hello");
}
function mySecond() { 
	 myDisplayer("Goodbye");
}
myFirst();
mySecond();
```

This example will end up displaying "Hello":

Example

```jsx
function myFirst() { 
	 myDisplayer("Hello");
}
function mySecond() {
  myDisplayer("Goodbye");
}
mySecond();
myFirst();
```

## Sequence Control

Sometimes you would like to have better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

You could call a calculator function (`myCalculator`), save the result, and then call another function (`myDisplayer`) to display the result:

Example

```jsx
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2) {
  let sum = num1 + num2;  return sum;
}
let result = myCalculator(5, 5);
myDisplayer(result);
```

Or, you could call a calculator function (`myCalculator`), and let the calculator function call the display function (`myDisplayer`):

Example

```jsx
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}
myCalculator(5, 5);
```

The problem with the first example above is that you have to call two functions to display the result.

The problem with the second example is that you cannot prevent the calculator function from displaying the result.

Now it is time to bring in a callback.

## JavaScript Callbacks

A callback is a function passed as an argument to another function.

Using a callback, you could call the calculator function (`myCalculator`) with a callback (`myCallback`), and let the calculator function run the callback after the calculation is finished:

Example

```jsx
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
```

In the example above, `myDisplayer` is a called a **callback function**.

It is passed to `myCalculator()` as an **argument**.

## Note

When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: ~~myCalculator(5, 5, myDisplayer())~~;

Example

```jsx
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// Call remove
Neg with a callbackconst posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// Display Result
document.getElementById("demo").innerHTML = posNumbers;
// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
```

In the example above, `(x) => x >= 0` is a **callback function**.

It is passed to `removeNeg()` as an **argument**.

---

## When to Use a Callback?

The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

# JavaScript Promises

# *"I Promise a Result!"*

     "Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code

## JavaScript Promise Object

A JavaScript Promise object contains both the producing code and calls to the consuming code:

## Promise Syntax

```jsx
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

When the producing code obtains the result, it should call one of the two callbacks:

---

## Promise Object Properties

A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected

The Promise object supports two properties: **state** and **result**.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

You cannot access the Promise properties **state** and **result**.

You must use a Promise method to handle promises.

---

## Promise How To

Here is how to use a Promise:

myPromise.then(  function(value) { /* code if successful */ },  function(error) { /* code if some error */ });

Promise.then() takes two arguments, a callback for success and another for failure.

Both are optional, so you can add a callback for success or failure only.

Example

```jsx
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;// The producing code (this may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }});
myPromise.then(
  function(value) {
myDisplayer(value);},
  function(error) {
myDisplayer(error);
});
```

# JavaScript Promise Examples

To demonstrate the use of promises, we will use the callback examples from the previous chapter:

- Waiting for a Timeout
- Waiting for a File

---

# JavaScript Async

# *"async and await make promises easier to write"*

**async** makes a function return a Promise

**await** makes a function wait for a Promise

## Async Syntax

The keyword `async` before a function makes the function return a promise:

Example

```jsx
async function myFunction() {
  return "Hello";
}
```

Is the same as:

```jsx
function myFunction() {
  return Promise.resolve("Hello");
}
```

Here is how to use the Promise:

```jsx
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

Example

```jsx
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

Or simpler, since you expect a normal value (a normal response, not an error):

Example

```jsx
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);
});
```

---

## Await Syntax

The `await` keyword can only be used inside an `async` function.

The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues:

```jsx
let value = await promise;
```

Example

Let's go slowly and learn how to use it.

## Basic Syntax

```jsx
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
```

The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.

### Example without reject

```jsx
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
```

## Waiting for a Timeout

```jsx
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
```

# Waiting for a File