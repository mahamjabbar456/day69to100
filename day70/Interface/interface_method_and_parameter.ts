/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

interface person {
    name :string;
    age : number;
    greet(message:string):void;
}

const Alice:person = {
    name:"alice",
    age:35,
    greet(message){
        console.log(`${message} and ${this.name} in typescript programming`);
    }
}

Alice.greet("Hello World");