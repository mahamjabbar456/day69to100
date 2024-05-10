/*********
 * ENUMS *
 *********/

enum Season{
    spring,
    season,
    autumn,
    Winter
}

let seasons:Season = Season.spring;
console.log(`Seaon is ${Season[seasons]}`);

// Another example
enum Roles {
    admin = "admin",
    user = "user",
}

type LoginDetails = {
    name:string,
    email:string,
    password:string,
    role:Roles
}

let user1:LoginDetails = {
    name :"John",
    email:"john@gmail.com",
    password:"29fjiew",
    role:Roles.admin
}

let user2:LoginDetails = {
    name :"Bob",
    email:"bob@gmail.com",
    password:"dienv45",
    role:Roles.user
}

let isAdmin = (user:LoginDetails)=>{
     let {name,role} = user;
     return role ==="admin" ? `${name} you allow to edit website` : `${name} you do not allow to edit website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));