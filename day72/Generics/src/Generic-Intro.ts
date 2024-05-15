/******************
 * GENERICS INTRO *
 ******************/

function ReturnType<T>(val:T):T{
    return val;
}

console.log(ReturnType<number>(45));
console.log(ReturnType<string>("John"));
console.log(ReturnType<boolean>(true));
console.log(ReturnType(<number[]>([4,5,6,78,14])));
console.log(ReturnType(<readonly[string,number,boolean]>(["Alice",67,false])));
