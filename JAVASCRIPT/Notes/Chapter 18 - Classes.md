# Chapter 18 - Classes

ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.

```jsx
class Pizza {
	constructor(pizzaType){
		this.type = pizzaType;
		this.size = "medium";
		this.crust = "Original";
	}
bake() {
	console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
	}
}

const mypizza = new Pizza();
mypizza.bake() //Backing a medium original crust pizza
```

.{

# indertince

```jsx
class Pizza {
	constructor(pizzaType){
		this.size = "medium";
		this.crust = "Original";
	}
	getCrust(){
		return this.crust;
	}
	setCrust(pizzaType){
		this.crust = pizzaCrust;
		}
}

class spec extends Pizza {
	constructor(pizzaSize) {
		super(pizzaSize);
		this.type = "The Works";
	}
	slice() {
		console.log(`our ${this.type} $(this.size} pizza has 8 slices`)
}

const myspec = new spec("median")
myspec.slice();
```

To create a public field we just assign to that like this 

```jsx
car = "volov"
```

but to make it private field we use # like this