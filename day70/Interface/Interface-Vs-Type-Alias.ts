/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Extending And Implementing:

// Interface
interface Student {
    name:string
}

interface result extends Student {
    show():void
}

class John implements result {
    name:string = "John";
    show(): void {
        console.log(`${this.name} result is excellent.`)
    }
}

let student = new John();
student.show();

// Type
type student = {
    name:string
}

type Result = student & {
    show():void;
}

let Alice:Result = {
    name:"alice",
    show(){
        console.log(`${this.name} result is very good.`);
    }
}

Alice.show();