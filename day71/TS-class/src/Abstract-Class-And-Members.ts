/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class Shape{
    constructor(protected color:string){}

    abstract calculateArea():number;
    abstract DisplayArea : () => void;
}

class Square extends Shape {
    constructor(protected color:string,protected side:number){
        super(color);
    }

    calculateArea(): number {
        return this.side * this.side;
    }

    DisplayArea = () => {
        console.log(`The color of shape is ${this.color} and the side is ${this.side}`);
    };

}

class Rectangle extends Shape {
    public static length:number
    constructor(protected color:string,protected width:number, public length:number){
        super(color);
    } 

    calculateArea(): number {
        return this.length * this.width;
    }

    DisplayArea= () => {
        console.log(`The color of shape is ${this.color} and the length is ${this.length} and the width is ${this.width}`);
    };
}

let square1 = new Square("Black",4);
console.log(square1.calculateArea());
square1.DisplayArea();

let rectangle1 = new Rectangle("Red",5,Rectangle.length = 4);
console.log(rectangle1.calculateArea());
rectangle1.DisplayArea();