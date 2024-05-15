/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generics with simple function
function returntype(val) {
    return val;
}
console.log(returntype(5));
console.log(returntype("John"));
// Generic with arrow function
const ReturnType = (val) => {
    return val;
};
console.log(ReturnType(["John", "Alice"]));
// Generic function "TestType"
const TestType = (val) => {
    return `The value is ${val} and the type is ${typeof val}`;
};
console.log(TestType(["John", "Alice"]));
// Generic Function `multipleTypes`
function MultipleTypes(a, b) {
    return `The first value is ${a} and The second value is ${b}`;
}
console.log(MultipleTypes(67.89, true));
console.log(MultipleTypes("Mahnoor", [4, 5, 6, 7, 89, 90]));
export {};
