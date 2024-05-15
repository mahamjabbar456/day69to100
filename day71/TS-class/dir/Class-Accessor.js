/*******************
 * CLASS ACCESSORS *
 *******************/
// Q1:Bank Account Balance
// Create a Typescript class BankAccount with a private property _balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-negative. Otherwise,log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter method to set the balance to 1000 and use the getter to display the applied balance.
// Try setting a negative balance using the setter. What output do you expect?
class BankAccount {
    name;
    _balance = 0;
    constructor(name) {
        this.name = name;
    }
    get balance() {
        return this._balance;
    }
    set balance(b) {
        if (b < 0) {
            throw new Error("Please enter non negative balance");
        }
        this._balance = b;
    }
}
let account1 = new BankAccount("John");
// setter and getter is the properties to set and display value.
account1.balance = 1000;
// account1.balance = -55;     //This will throw an error Please enter non negative value.
console.log(account1.balance);
// Question 2  : Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C*9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F - 32) *5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit.What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?
class Temperature {
    _celsius = 0;
    set Celsius(t) {
        this._celsius = t;
    }
    get Celsius() {
        return this._celsius;
    }
    set Fahrenheit(t) {
        this._celsius = (t - 32) * 5 / 9;
    }
    get Fahrenheit() {
        return (this._celsius * 9 / 5) + 32;
    }
}
let temp = new Temperature();
temp.Celsius = 25;
temp.Fahrenheit = 77;
console.log(`Temperature in Celsius to Fahrenheit ${temp.Fahrenheit}`);
console.log(`Temperature in Fahrenheit to Celsius ${temp.Celsius}`);
export {};
