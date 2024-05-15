/************************
 * CLASS STATIC MEMBERS *
 ************************/

class MathOperation {
    public static PI:number = Math.PI;

    public static add(num1:number,num2:number){
        return num1 + num2;
    }

    public static sub(num1:number,num2:number){
        return num1 - num2;
    }

    public static multiply(num1:number,num2:number){
        return num1 * num2;
    }
}

// Access static properties
console.log(MathOperation.PI);
console.log(MathOperation.add(4,5));
console.log(MathOperation.sub(4,5));
console.log(MathOperation.multiply(4,5));

class ProductStaticMember {
    private static nextId:number = 1;

    constructor (private id:number,private name:string){}

    static generateNextId():number{
        return ProductStaticMember.nextId++;
    }

    Getinfo():string{
        return `ID = ${this.id} and name = ${this.name}`;
    }
}

let product1 = new ProductStaticMember(5,"John");
let product2 = new ProductStaticMember(ProductStaticMember.generateNextId(),"John");
let product3 = new ProductStaticMember(ProductStaticMember.generateNextId(),"Alice");
console.log(product1.Getinfo());
console.log(product2.Getinfo());
console.log(product3.Getinfo());
// console.log(ProductStaticMember.generateNextId());