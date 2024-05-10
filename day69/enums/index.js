/*********
 * ENUMS *
 *********/
var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["season"] = 1] = "season";
    Season[Season["autumn"] = 2] = "autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
let seasons = Season.spring;
console.log(`Seaon is ${Season[seasons]}`);
// Another example
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
let user1 = {
    name: "John",
    email: "john@gmail.com",
    password: "29fjiew",
    role: Roles.admin
};
let user2 = {
    name: "Bob",
    email: "bob@gmail.com",
    password: "dienv45",
    role: Roles.user
};
let isAdmin = (user) => {
    let { name, role } = user;
    return role === "admin" ? `${name} you allow to edit website` : `${name} you do not allow to edit website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
export {};
