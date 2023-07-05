# Chapter 20 - Error

# Throw, and Try...Catch...Finally

The `try` statement defines a code block to run (to try).

The `catch` statement defines a code block to handle any error.

The `finally` statement defines a code block to run regardless of the result.

The `throw` statement defines a custom error.

# Errors Will Happen!

When executing JavaScript code, different errors can occur.

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

# JavaScript try and catch

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements `try` and `catch` come in pairs:

try {  

*Block of code to try*

}

catch(*err*) { 

 *Block of code to handle errors*

}

# JavaScript Throws Errors

When an error occurs, JavaScript will normally stop and generate an error message.

The technical term for this is: JavaScript will **throw an exception (throw an error)**.

JavaScript will actually create an **Error object** with two properties: **name** and **message**.

---

# The throw Statement

The `throw` statement allows you to create a custom error.

Technically you can **throw an exception (throw an error)**.

The exception can be a JavaScript `String`, a `Number`, a `Boolean` or an `Object`:

throw "Too big";    // throw a textthrow 500;          // throw a number

If you use `throw` together with `try` and `catch`, you can control program flow and generate custom error messages.

# The finally Statement

The `finally` statement lets you execute code, after try and catch, regardless of the result:

# Syntax

try {  

*Block of code to try*

}

catch(*err*) {

  *Block of code to handle errors*

}

finally {

  *Block of code to be executed regardless of the try / catch result*

}