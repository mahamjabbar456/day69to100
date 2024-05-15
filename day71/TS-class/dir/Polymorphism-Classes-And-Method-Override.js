/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/
class AbstractEntity {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
class Entity extends AbstractEntity {
    id;
    name;
    constructor(id, name) {
        super(id, name);
        this.id = id;
        this.name = name;
    }
    getentityinfo() {
        return `My id is ${this.id} and my name is ${this.name}`;
    }
}
class AnotherEntity extends AbstractEntity {
    id;
    name;
    constructor(id, name) {
        super(id, name);
        this.id = id;
        this.name = name;
    }
    getentityinfo() {
        return `My id is ${this.id} and my name is ${this.name}`;
    }
}
let entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
let entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
console.log(entity1.getentityinfo());
console.log(entity2.getentityinfo());
export {};
