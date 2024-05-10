/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/
class John {
    name = "John";
    show() {
        console.log(`${this.name} result is excellent.`);
    }
}
let student = new John();
student.show();
let Alice = {
    name: "alice",
    show() {
        console.log(`${this.name} result is very good.`);
    }
};
Alice.show();
export {};
