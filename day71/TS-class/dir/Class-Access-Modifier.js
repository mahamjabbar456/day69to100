/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/
// Public Variable We can access public variable outside the class within name.
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `My name is ${this.name}\nMy age is ${this.age}\n My hobbies is ${this.hobbies.join(",")}`;
    }
}
let person1 = new Persons("John", 45, ["Coding", "Programming"]);
console.log(`Access the age property as a public ${person1.age}`);
// Protected Variable We can access protected variable only in the child class and parent class.
// We can make hobbies variable protected in Persons and try to access in the child class Students.
class Students extends Persons {
    grade;
    constructor(grade, name, age, hobbies) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    ChildIntroduce() {
        return this.hobbies;
    }
}
// let person1 = new Persons("John", 45, ["Coding", "Programming"]);
// if we try to access hobbies value directly from parent class this will also throw error.
// console.log(person1.hobbies);
let student1 = new Students(15, "John", 45, ["Coding", "Programming"]);
// if we try to access directly this will throw error.
// console.log(student1.hobbies);
console.log(`Do not Access the hobbies property as a protected so we access with method ${student1.ChildIntroduce()}`);
// Private
class MyClassPrivate {
    secret;
    constructor(secret) {
        this.secret = secret;
    }
    display() {
        // console.log(this.secret);
        return this.secret;
    }
}
let private1 = new MyClassPrivate("My Secret");
// console.log(private1.secret);  // This would result in an error because secret is private
console.log(private1.display());
export {};
