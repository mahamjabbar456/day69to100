/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/

class ProductImplementInterface{
    private static nextId :number = 1;

    constructor (private id:number,private name:string){}

    static GenerateNextId():number{
        return ProductImplementInterface.nextId++;
    }

    getinfo():string{
        return`ID = ${this.id} and name = ${this.name}`;
    }
}

let product1implement = new ProductImplementInterface(ProductImplementInterface.GenerateNextId(),"Widget");
console.log(product1implement.getinfo());