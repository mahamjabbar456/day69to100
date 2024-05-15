/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/
class ProductImplementInterface {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static GenerateNextId() {
        return ProductImplementInterface.nextId++;
    }
    getinfo() {
        return `ID = ${this.id} and name = ${this.name}`;
    }
}
let product1implement = new ProductImplementInterface(ProductImplementInterface.GenerateNextId(), "Widget");
console.log(product1implement.getinfo());
export {};
