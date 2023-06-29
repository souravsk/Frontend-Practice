# Chapter 5 - Math

- Math.PI
- Math.trunc() - it will remove the decialm from the number
- Math.round() - it will round up the decimal number
- Math.ceil() - it will also round up the value just like round but with 1 value up like 3.1 will be shown as 4
- Math.floor() - it is just appostie of ceil method it will round but 1 value down
- Math.pow() - it will take 2 number 2 to the power 10 = 1024
- Math.min() - it will return the smallest number
- Math.max() - it will return the largest number
- Math.random() - it will return the random number

> Choose Math.floor() NOT Math.ceil() for generating a random number from 1 to 10
WHY ? YOU SAY
Math.random() return a range from 0 to 1 that includes 0 but not 1 (Ex 0.5641, 0.641674593546)

- Math.ceil(Math.random() * 10) has a chance of resulting in zero
- Math.floor(Math.random() * 10 + 1) is the way to go
>