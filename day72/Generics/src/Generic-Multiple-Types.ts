/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generics with simple function
function returntype<T>(val:T):T{
    return val;
}
console.log(returntype<number>(5));
console.log(returntype<string>("John"));

// Generic with arrow function
const ReturnType = <T>(val:T):T =>{
    return val;
}

console.log(ReturnType<string[]>(["John","Alice"]));

// Generic function "TestType"
const TestType = <T>(val:T):string =>{
    return `The value is ${val} and the type is ${typeof val}`;
}
console.log(TestType<string[]>(["John","Alice"]));

// Generic Function `multipleTypes`

function MultipleTypes<T,S>(a:T,b:S):string{
    return `The first value is ${a} and The second value is ${b}`;
}
console.log(MultipleTypes<number,boolean>(67.89,true));
console.log(MultipleTypes<string,number[]>("Mahnoor",[4,5,6,7,89,90]));