import {  Output, EventEmitter,Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coment } from 'src/app/class/coment';
import { BookmenagerService } from 'src/app/service/bookmenager.service';

@Component({
  selector: 'app-comm-form',
  templateUrl: './comm-form.component.html',
  styleUrls: ['./comm-form.component.css']
})
export class CommFormComponent {
  @Output()
  comented = new EventEmitter();

  stars=[1,2,3,4,5];
  name="";
  ocena=1;
  commentar="";
  comentar = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    rating : new FormControl(null,[Validators.required,Validators.min(1)]),
    comm: new FormControl('',[Validators.required,Validators.minLength(10)])
  });

  constructor(private Book:BookmenagerService,private route: ActivatedRoute,private router: Router){

  }
  onSubmit(){
    this.name=this.comentar.get("Name")?.value ??"";
    this.ocena=this.comentar.get("rating")?.value ??1;
    this.commentar=this.comentar.get("comm")?.value ??"";
    let n=new Coment(Number(this.route.snapshot.paramMap.get('id')),this.name, this.ocena,this.commentar);
    this.Book.addCom(n);
    this.comentar.get("rating")?.setValue(null);
    this.comentar.get("Name")?.setValue(null);
    this.comentar.get("comm")?.setValue(null);
    this.comented.emit();
    
  }


}
