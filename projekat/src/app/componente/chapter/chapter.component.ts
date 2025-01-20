import { Component, OnInit } from '@angular/core';
import { BookmenagerService } from 'src/app/service/bookmenager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/class/chapter';
 

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  bookId:number;
  index:number;
  chapter:Chapter;
  hasNext:boolean;
  hasPrev:boolean;
  


  constructor(private bookmenagerService:BookmenagerService,private route: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {
    this.bookId =Number(this.route.snapshot.paramMap.get('id'));
    this.index =Number(this.route.snapshot.paramMap.get('index'));
    this.chapter=this.bookmenagerService.getChapter(this.bookId,this.index);
    this.hasNext=this.bookmenagerService.ChapterExist(this.bookId,this.index+1);
    this.hasPrev=this.bookmenagerService.ChapterExist(this.bookId,this.index-1);

  }


  next(){
    this.router.navigate(['/chapter',this.bookId , this.index+1 ]).then(page => { window.location.reload(); });
  }

  prev(){
    this.router.navigate(['/chapter',this.bookId , this.index-1 ]).then(page => { window.location.reload(); });
  }

}
