import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MiniaturePostComponent } from './components/miniature-post/miniature-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnEditDeleteComponent } from './components/btn-edit-delete/btn-edit-delete.component';
import { PostsIndexComponent } from './components/posts-index/posts-index.component';
import { AddPostBtnComponent } from './components/add-post-btn/add-post-btn.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ImageUrlAppendPipe } from './image-url-append.pipe';
import { ImageUrlAppendSimplePipe } from './image-url-append-simple.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FilterBarComponent,
    MiniaturePostComponent,
    BtnEditDeleteComponent,
    PostsIndexComponent,
    AddPostBtnComponent,
    PostModalComponent,
    NotFoundComponent,
    PostDetailsComponent,
    ImageUrlAppendPipe,
    ImageUrlAppendSimplePipe
  ],
  entryComponents: [PostModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
