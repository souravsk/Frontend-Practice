# Chapter 17 - Objects

The object comes in key-value pair

```jsx
const obj = { name:"Sourav"}; //that's an example of object
console.log(obj)
```

Objects not just can store string values they can do much more.

```jsx
const obj = {
	alive: true,
	answer: 42,
	hobbies: ["Eat", "sleep", "movie"],
	beverage: {
			morning: "Coffee",
			afternoon: "Iced Tea"
	},
action: function () {
	return `Time for ${this.beverage.morning}`;
}

console.log(obj.action()); //Time for Coffe
console.log(obj.alive); //true
```

this is also an object which has an array within an array