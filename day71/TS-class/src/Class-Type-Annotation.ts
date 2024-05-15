/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Persons {
    name:string;
    age:number;
    hobbies:string[];
    constructor(name:string, age:number, hobbies:string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `My name is ${this.name}\nMy age is ${this.age}\n My hobbies is ${this.hobbies.join(",")}`;
    }
}

let person1 = new Persons("John", 45, ["Coding", "Programming"]);
console.log(person1.introduce());