# Chapter 1 & 2 - Javascript basic

# JavaScript Can Change HTML Content

One of many JavaScript HTML methods is `getElementById()`.

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

Example

document.getElementById("demo").innerHTML = "Hello JavaScript";

JavaScript accepts both double and single quotes:

Example

document.getElementById('demo').innerHTML = 'Hello JavaScript';

# JavaScript Can Change HTML Attribute Values

In this example JavaScript changes the value of the `src` (source) attribute of an `<img>` tag:

# JavaScript Can Change HTML Styles (CSS)

Changing the style of an HTML element, is a variant of changing an HTML attribute:

# Example

document.getElementById("demo").style.fontSize = "35px";

# JavaScript Can Hide HTML Elements

Hiding HTML elements can be done by changing the `display` style:

# Example

document.getElementById("demo").style.display = "none";

# JavaScript Can Show HTML Elements

Showing hidden HTML elements can also be done by changing the `display` style:

# Example

document.getElementById("demo").style.display = "block";

# Did You Know?

JavaScript and [Java](https://www.w3schools.com/java/default.asp) are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.