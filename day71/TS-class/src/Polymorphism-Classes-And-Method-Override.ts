/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/

abstract class AbstractEntity {
    private static nextId:number =1;
    constructor(public id:number,public name:string) { }

    static generateNextId():number{
        return AbstractEntity.nextId++;
    }

    abstract getentityinfo():string;
}

class Entity extends AbstractEntity {
    constructor(public id:number,public name:string){
        super(id,name);
    }

    getentityinfo(): string {
        return `My id is ${this.id} and my name is ${this.name}`;
    }
}

class AnotherEntity extends AbstractEntity {
    constructor(public id:number,public name:string){
        super(id,name);
    }

    getentityinfo(): string {
        return `My id is ${this.id} and my name is ${this.name}`;
    }
}

let entity1 = new Entity(AbstractEntity.generateNextId(),"Widget");
let entity2 = new AnotherEntity(AbstractEntity.generateNextId(),"Gadget");
console.log(entity1.getentityinfo());
console.log(entity2.getentityinfo());