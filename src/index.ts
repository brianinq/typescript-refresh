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

type Employee = {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
};
const employee: Employee = {
  id: 1,
  name: "Beryl",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types and type narrowing

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}
