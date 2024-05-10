/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
const Alice = {
    name: "alice",
    age: 35,
    greet(message) {
        console.log(`${message} and ${this.name} in typescript programming`);
    }
};
Alice.greet("Hello World");
export {};
