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

//type intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let TextBox: UiWidget = {
  drag: () => {
    console.log("draggable");
  },
  resize: () => {
    console.log("resizable");
  },
};

// literal types

type Quantity = 50 | 100;
let quantity: Quantity = 100;

// nullish coaelscing opperator ??
// || vs ?? given what js considers falsy including 0 & "" || takes the value to the right while ?? only does this for null and undefined values

//type assertion
// as doesnt do type conversion
let phone = document.getElementById("phone") as HTMLInputElement;

let phone2 = <HTMLInputElement>document.getElementById("phone");

// never type, unknown type
