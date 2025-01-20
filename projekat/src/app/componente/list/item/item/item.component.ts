import { Component,Input } from '@angular/core';
import { Book } from 'src/app/class/book';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  book!: Book;

}
