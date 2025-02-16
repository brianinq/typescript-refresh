"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(name) {
    return (constructor) => {
        console.log(`component decorator called from ${name}`);
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertIntoDOM = () => {
            console.log("Inserting the component into the dom");
        };
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component("profile Component")
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before method call");
        originalFunction.call(this, ...args);
        console.log("after method call");
    };
}
class Person {
    say(message) {
        console.log("the message is" + message);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
const p1 = new Person();
p1.say("hello");
