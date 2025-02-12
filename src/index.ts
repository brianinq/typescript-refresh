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

const employee: {
  readonly id: number;
  name: String;
  retire?: (date: Date) => void;
} = {
  id: 1,
  name: "Beryl",
  retire: (date: Date) => {
    console.log(date);
  },
};
