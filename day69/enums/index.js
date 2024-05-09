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
export {};
