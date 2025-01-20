import { Injectable} from '@angular/core';
import { Book } from '../class/book';
import { Chapter } from '../class/chapter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coment } from '../class/coment';


@Injectable({
  providedIn: 'root'
})
export class BookmenagerService  {
  books:Book[];
  chapters:Chapter[];
  comm:Coment[];
  constructor(private http: HttpClient) {  
    this.chapters=[
      new Chapter(1,1,"chapter 1","content1"),
      new Chapter(1,2,"chapter 2","content2"),
      new Chapter(1,3,"chapter 3","content3"),
      new Chapter(1,4,"chapter 4","content4"),
      new Chapter(1,5,"chapter 5","content5"),
      new Chapter(1,6,"chapter 6","content6"),
      new Chapter(1,7,"chapter 7","content7"),
      new Chapter(1,8,"chapter 8","content"),
      new Chapter(1,9,"chapter 9","content"),
      new Chapter(1,10,"chapter 10","content"),
      new Chapter(1,11,"chapter 11","content"),
      new Chapter(1,12,"chapter 12","content"),
    ]
    this.comm=[
      new Coment(1,"Nikola",5,"exelent book"),
      new Coment(1,"Markov",5,"exelent book"),
      new Coment(1,"Konjak",2,"no comm"),
      new Coment(1,"Nikola",4,"exelent book"),
      new Coment(1,"Nikola",5,"exelent book"),
      new Coment(1,"Nikola",5,"exelent book"),
      new Coment(1,"Nikola",3,"exelent book"),
      new Coment(1,"Nikola",5,"exelent book")
    ]
    this.fetchStocks()
  }

  fetchStocks() {
    console.log("fetch poceo")
    this.http.get<Book[]>('/api/stock')
      .subscribe(stocks => {
        console.log(stocks)
        this.books = stocks;
      });
      console.log("fetch zavrsen");  
  }
  getComm(id:number){
    console.log(""+id)
    let pom:Coment[]=[];
    for(let i=0;i<this.comm.length;i++){

      if(id==this.comm[i].BookId){
        pom.push(this.comm[i]);
        console.log("prosao")
      }
    }
    return pom;
  }

  getBooks(){
    return this.books;
  }
  getTop3():Observable<Book[]>{
    this.fetchStocks();
    return  this.http.get<Book[]>('/api/stock');
    
  }
  get10from(i:number){
    let pom:Book[]=[];
    let n=i+10;
    while(i<this.books.length&& i<n){
       pom.push(this.books[i])
       i++;
    }
    return pom;
  }


  getNumberOfBooks(){
    return this.books.length;

  }
  getBook(id:number){
    for(let i=0;i<this.books.length;i++){
      if(id==this.books[i].id){
        return this.books[i];
      }
    }
    return new Book(13,"err",-1,-1,-1,'https://images.app.goo.gl/PaVjm1GNEN5Ty7uX8',"err");
  }
  getChapters(id:number){
    let pom:Chapter[] = [];
    for(let i=0;i<this.chapters.length;i++){
      if(id==this.chapters[i].bookId){
        pom.push(this.chapters[i]);
      }

    }
    return pom;
  }
  getChapter(id:number,index:number){

    for(let i=0;i<this.chapters.length;i++){
      if(id==this.chapters[i].bookId&&index==this.chapters[i].index){
        return this.chapters[i];
      }
    }
    return this.chapters[1];
  }

  ChapterExist(id:number,index:number){

    for(let i=0;i<this.chapters.length;i++){
      if(id==this.chapters[i].bookId&&index==this.chapters[i].index){
        return true;
      }
    }
    return false;
    
  }
  addCom(n:Coment){
    this.comm.push(n);
  }

}
