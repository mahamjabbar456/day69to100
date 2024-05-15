/***************************
 * GENERICS AND INTERFACES *
 ***************************/
class Collection {
    data = [];
    add(item) {
        this.data.push(item);
    }
}
let book1 = new Collection();
book1.add({ itemType: "Book", title: "English", isbn: 74750340 });
console.log(book1);
let game1 = new Collection();
game1.add({ itemType: "Game", title: "Skeleton", style: "Fighting", price: 10000 });
console.log(game1);
export {};
