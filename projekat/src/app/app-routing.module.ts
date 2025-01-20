import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component'
import { BookComponent } from './componente/book/book.component';
import { ChapterComponent } from './componente/chapter/chapter.component';
import { ListComponent } from './componente/list/list.component';


const routes: Routes = [
  { path: 'chapter/:id/:index', component: ChapterComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
