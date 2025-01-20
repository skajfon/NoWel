import { Component,OnInit  } from '@angular/core';
import { Book } from 'src/app/class/book';
import { BookmenagerService } from 'src/app/service/bookmenager.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Book[];

  constructor(private BookmenagerService:BookmenagerService ){
  }

  ngOnInit(): void {
    this.BookmenagerService.getTop3().subscribe(stocks => {
      console.log(stocks)
      this.books = stocks;
    });
  }



}
