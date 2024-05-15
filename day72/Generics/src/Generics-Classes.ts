/********************
 * GENERICS CLASSES *
 ********************/

class User <T = string>{
    constructor(public value:T){}

    show(message:T){
        console.log(`${message} - ${this.value}`);
    }
}

let UserOne = new User<string>("John");
console.log(UserOne.value);
UserOne.show("Message");

let UserTwo = new User<string | number>(456);
console.log(UserTwo.value);
UserTwo.show("Message");