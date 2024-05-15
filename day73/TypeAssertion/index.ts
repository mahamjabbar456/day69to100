/*******************
 * TYPE ASSERTIONS *
 *******************/

// We can define variable as any and then we write variable as string and use all string method.

let data:any = "1000";

console.log((data as string).length);
console.log((data as string).toLowerCase());
console.log((data as string).repeat(3));