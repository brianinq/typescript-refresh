function Component(constructor: Function) {
  console.log("component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertIntoDOM = () => {
    console.log("Inserting the component into the dom");
  };
}

@Component
class ProfileComponent {}
