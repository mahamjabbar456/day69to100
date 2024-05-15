/***************************
 * GENERICS AND INTERFACES *
 ***************************/

interface Book{
    itemType:string;
    title:string;
    isbn:number;
}

interface Game{
    itemType:string;
    title:string;
    style:string;
    price:number;
}

class Collection<T>{
    public data:T[] = [];

    add(item:T){
        this.data.push(item);
    }
}

let book1 = new Collection<Book>();
book1.add({itemType:"Book",title:"English",isbn:74750340});
console.log(book1);

let game1 = new Collection<Game>();
game1.add({itemType:"Game",title:"Skeleton",style:"Fighting",price:10000});
console.log(game1);