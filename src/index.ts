console.log("hello world");
let age: number = 20;
console.log(age);

// define enums with const to generate more optimized code
const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}
const mySize: Size = Size.Large;
console.log(mySize);
