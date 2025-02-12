"use strict";
console.log("hello world");
let age = 20;
console.log(age);
const mySize = "l";
console.log(mySize);
const employee = {
    id: 1,
    name: "Beryl",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let TextBox = {
    drag: () => {
        console.log("draggable");
    },
    resize: () => {
        console.log("resizable");
    },
};
