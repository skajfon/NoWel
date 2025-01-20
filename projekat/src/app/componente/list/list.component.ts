import { Component,OnInit } from '@angular/core';
import { Book } from 'src/app/class/book';
import { BookmenagerService } from 'src/app/service/bookmenager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  books:Book[];
  page:number;
  BookNum:number;
  canGoBack:boolean;
  canGoNext:boolean;

  constructor(private BookmenagerService:BookmenagerService ){
    this.books=[];
    this.page =0;
    this.BookNum=this.BookmenagerService.getNumberOfBooks();
    this.canGoBack=false;
    this.canGoNext=this.BookNum>10;
  }

  ngOnInit(): void {
    this.books =this.BookmenagerService.get10from(this.page*10);

  }
  back(){
    this.page--;
    this.books =this.BookmenagerService.get10from(this.page*10);
    this.BookNum=this.BookmenagerService.getNumberOfBooks();
    this.canGoNext=true;
    this.canGoBack=this.page>0;
  }

  next(){
    this.page++;
    this.books =this.BookmenagerService.get10from(this.page*10);
    this.BookNum=this.BookmenagerService.getNumberOfBooks();
    this.canGoBack=true;
    this.canGoNext=(this.page*10+10)<this.BookNum;
  }
}
