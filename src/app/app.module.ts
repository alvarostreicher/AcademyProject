import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MiniaturePostComponent } from './components/miniature-post/miniature-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnEditDeleteComponent } from './components/btn-edit-delete/btn-edit-delete.component';
import { PostsIndexComponent } from './components/posts-index/posts-index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FilterBarComponent,
    MiniaturePostComponent,
    BtnEditDeleteComponent,
    PostsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
