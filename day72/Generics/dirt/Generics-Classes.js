/********************
 * GENERICS CLASSES *
 ********************/
class User {
    value;
    constructor(value) {
        this.value = value;
    }
    show(message) {
        console.log(`${message} - ${this.value}`);
    }
}
let UserOne = new User("John");
console.log(UserOne.value);
UserOne.show("Message");
let UserTwo = new User(456);
console.log(UserTwo.value);
UserTwo.show("Message");
export {};
