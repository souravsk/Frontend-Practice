# Chapter 22 - Event Listeners

# Event

## Reacting to Events

JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

```html
onclick=*JavaScript*
```

Examples of HTML events:

- When a user clicks the mouse
- When a web page has loaded
- When an image has been loaded
- When the mouse moves over an element
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

In this example, the content of the `<h1>` element is changed when a user clicks on it:

# Example

```html
<!DOCTYPE html>
<HTML>
<body>
<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
</body>
</html>
```

In this example, a function is called from the event handler:

# Example

```html
<!DOCTYPE html>
<HTML>
<body>
<h1 onclick="changeText(this)">Click on this text!</h1>
<script>function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>
</body>
</html>
```

## HTML Event Attributes

To assign events to HTML elements you can use event attributes.

Example

Assign an onclick event to a button element:

```html
<button onclick="displayDate()">Try it</button>
```

In the example above, a function named `displayDate` will be executed when the button is clicked.

---

## Assign Events Using the HTML DOM

The HTML DOM allows you to assign events to HTML elements using JavaScript:

Example

Assign an onclick event to a button element:

```html
<script>document.getElementById("myBtn").onclick = displayDate;</script>
```

In the example above, a function named `displayDate` is assigned to an HTML element with the `id="myBtn"`.

The function will be executed when the button is clicked.

---

# The onload and onunload Events

The `onload` and `onunload` events are triggered when the user enters or leaves the page.

The `onload` event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

The `onload` and `onunload` events can be used to deal with cookies.

# Example

<body onload="checkCookies()">

---

# The onchange Event

The `onchange` event is often used in combination with validation of input fields.

Below is an example of how to use the onchange. The `upperCase()` function will be called when a user changes the content of an input field.

# Example

<input type="text" id="fname" onchange="upperCase()">

---

# The onmouseover and onmouseout Events

The `onmouseover` and `onmouseout` events can be used to trigger a function when the user mouses over, or out of, an HTML element:

# The onmousedown, onmouseup and onclick Events

---

The `onmousedown`, `onmouseup`, and `onclick` events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.

# **EventListener**

# The addEventListener() method

Example

Add an event listener that fires when a user clicks a button:

```html
document.getElementById("myBtn").addEventListener("click", displayDate);
```

The `addEventListener()` method attaches an event handler to the specified element.

The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element.

You can add many event handlers of the same type to one element, i.e two "click" events.

You can add event listeners to any DOM object not only HTML elements. i.e the window object.

The `addEventListener()` method makes it easier to control how the event reacts to bubbling.

When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

You can easily remove an event listener by using the `removeEventListener()` method.

---

Syntax

```html
*element*.addEventListener(*event, function, useCapture*);
```

1. The first parameter is the type of the event (like "`click`" or "`mousedown`" or any other [HTML DOM Event](https://www.w3schools.com/jsref/dom_obj_event.asp).)
2. The second parameter is the function we want to call when the event occurs.
3. The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

Note that you don't use the "on" prefix for the event; use "`click`" instead of "`onclick`".

---

# Add an Event Handler to an Element

Example

Alert "Hello World!" when the user clicks on an element:

```jsx
*element*.addEventListener("click", function(){ alert("Hello World!"); });
```

You can also refer to an external "named" function:

Example

Alert "Hello World!" when the user clicks on an element:

```jsx
*element*.addEventListener("click", myFunction);
function myFunction() { 
 alert ("Hello World!");
}
```

# Add Many Event Handlers to the Same Element

The `addEventListener()` method allows you to add many events to the same element, without overwriting existing events:

Example

```jsx
*element*.addEventListener("click", myFunction);
*element*.addEventListener("click", mySecondFunction);
```

You can add events of different types to the same element:

Example

```jsx
*element*.addEventListener("mouseover", myFunction);
*element*.addEventListener("click", mySecondFunction);
*element*.addEventListener("mouseout", myThirdFunction);
```

---

# Add an Event Handler to the window Object

The `addEventListener()` method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the `xmlHttpRequest` object.

Example

Add an event listener that fires when a user resizes the window:

```jsx
window.addEventListener("resize", function(){  
	document.getElementById("demo").innerHTML = *sometext*;
});
```

---

# Passing Parameters

When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

Example

```jsx
*element*.addEventListener("click", function(){ myFunction(p1, p2); });
```

---

# Event Bubbling or Event Capturing?

There are two ways of event propagation in the HTML DOM, bubbling and capturing.

Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

- In *bubbling* the inner most element's event is handled first and then the outer:
    
    the <p> element's click event is handled first, then the <div> element's click event.
    
- In *capturing* the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

With the `addEventListener()` method you can specify the propagation type by using the "useCapture" parameter:

```jsx
addEventListener(*event*, *function*, *useCapture*);
```

`***The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.***

Example

```jsx
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
```

---

# The removeEventListener() method

The `removeEventListener()` method removes event handlers that have been attached with the addEventListener() method:

# Example

*element*.removeEventListener("mousemove", myFunction);