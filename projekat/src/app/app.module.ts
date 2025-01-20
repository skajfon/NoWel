import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component';
import { ListComponent } from './componente/list/list.component';
import { BookComponent } from './componente/book/book.component';
import { ChapterComponent } from './componente/chapter/chapter.component';
import { ItemComponent } from './componente/list/item/item/item.component';
import { CommentsComponent } from './componente/comments/comments.component';
import { CommFormComponent } from './componente/comments/comm-form/comm-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    BookComponent,
    ChapterComponent,
    ItemComponent,
    CommentsComponent,
    CommFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
