import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/class/book';
import { Chapter } from 'src/app/class/chapter';
import { BookmenagerService } from 'src/app/service/bookmenager.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  bookId:number;
  book:Book;
  chapters:Chapter[];
  page:number;
  canBack:boolean;
  canNext:boolean;

  constructor(BookmenagerService:BookmenagerService,private route: ActivatedRoute){
    this.bookId =Number(this.route.snapshot.paramMap.get('id'));
    this.book=BookmenagerService.getBook(this.bookId);
    this.chapters=BookmenagerService.getChapters(this.bookId);
    this.page=0;
    this.canBack=false;
    this.canNext=this.chapters.length>10;
  }
  ngOnInit(): void {
    this.bookId =Number(this.route.snapshot.paramMap.get('id'));
  }

  get10(){
    let pom1:Chapter[]=[];
    for(let i=this.page*10;i<this.page*10+10&&i<this.chapters.length;i++){
      pom1.push(this.chapters[i]);
    }
    return pom1;
  }
  prev(){
    this.page--;
    this.canBack=this.page>0;
    this.canNext=true;
  }
  next(){
    this.page++;
    this.canBack=true;
    this.canNext=(this.page*10+10)<this.chapters.length;
  }
}
