/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Square extends Shape {
    color;
    side;
    constructor(color, side) {
        super(color);
        this.color = color;
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    DisplayArea = () => {
        console.log(`The color of shape is ${this.color} and the side is ${this.side}`);
    };
}
class Rectangle extends Shape {
    color;
    width;
    length;
    static length;
    constructor(color, width, length) {
        super(color);
        this.color = color;
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.length * this.width;
    }
    DisplayArea = () => {
        console.log(`The color of shape is ${this.color} and the length is ${this.length} and the width is ${this.width}`);
    };
}
let square1 = new Square("Black", 4);
console.log(square1.calculateArea());
square1.DisplayArea();
let rectangle1 = new Rectangle("Red", 5, Rectangle.length = 4);
console.log(rectangle1.calculateArea());
rectangle1.DisplayArea();
export {};
