/************************
 * CLASS STATIC MEMBERS *
 ************************/
class MathOperation {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static multiply(num1, num2) {
        return num1 * num2;
    }
}
// Access static properties
console.log(MathOperation.PI);
console.log(MathOperation.add(4, 5));
console.log(MathOperation.sub(4, 5));
console.log(MathOperation.multiply(4, 5));
class ProductStaticMember {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMember.nextId++;
    }
    Getinfo() {
        return `ID = ${this.id} and name = ${this.name}`;
    }
}
let product1 = new ProductStaticMember(5, "John");
let product2 = new ProductStaticMember(ProductStaticMember.generateNextId(), "John");
let product3 = new ProductStaticMember(ProductStaticMember.generateNextId(), "Alice");
console.log(product1.Getinfo());
console.log(product2.Getinfo());
console.log(product3.Getinfo());
export {};
// console.log(ProductStaticMember.generateNextId());
