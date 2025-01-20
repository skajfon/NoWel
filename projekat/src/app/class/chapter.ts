export class Chapter {
    bookId:number;
    index:number;
    name:string;
    content:string;
    constructor(bookId:number,index:number,name:string,content:string){
        this.bookId=bookId;
        this.index=index;
        this.name=name;
        this.content=content;
    }
}
