// function Component(constructor: Function) {
//   console.log("component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertIntoDOM = () => {
//     console.log("Inserting the component into the dom");
//   };
// }

//decorator factory
function Component(name: string) {
  return (constructor: Function) => {
    console.log(`component decorator called from ${name}`);
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertIntoDOM = () => {
      console.log("Inserting the component into the dom");
    };
  };
}

@Component("profile Component")
class ProfileComponent {}

// method decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalFunction = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before method call");
    originalFunction.call(this, ...args);
    console.log("after method call");
  };
}
class Person {
  @Log
  say(message: string) {
    console.log("the message is" + message);
  }
}
const p1 = new Person();
p1.say("hello");
