import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coment } from 'src/app/class/coment';
import { BookmenagerService } from 'src/app/service/bookmenager.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comm:Coment[];
  BookId:number;
  wantToComm:boolean=false;
  constructor(private BookmenagerService:BookmenagerService,private route: ActivatedRoute){
    this.BookId =Number(this.route.snapshot.paramMap.get('id'));
    this.comm=BookmenagerService.getComm(this.BookId);
  }
  ngOnInit(): void {
  }
  commOn(){
    this.wantToComm=true;
  }
  Comented(event: Event){
    this.wantToComm=false;
    this.comm=this.BookmenagerService.getComm(this.BookId);
  }

}
