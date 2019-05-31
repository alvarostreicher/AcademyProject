import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';
import { Observable, Subscription } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.scss']
})
export class PostsIndexComponent implements OnInit, OnDestroy {

  posts$ : Observable<object[]>;
  posts : object[];
  sub$ : any;
  subModal$: any;
  subSnack$: any;

  constructor(private apiCallService : ApiCallsService) { }

  ngOnInit( ) {
    this.getPosts();
  }

  ngOnDestroy( ) {
    this.sub$.unsubscribe();
  }

  // getPosts() : Observable<object[]> {
  //   // return this.posts$ = this.apiCallService.getPosts();
    
  // }
  getPosts() : object[] {
    this.sub$ = this.apiCallService.getPosts().subscribe((post)=> this.posts = post);
    return this.posts;
  }

  postAddEvent (event) {
    this.posts.unshift(event);
    this.subModal$.componentInstance.sendPost.unsubscribe();
    this.subModal$.close();
  }
  

  addModalReference (event) {
    this.subModal$ = event;
  }

  editPostEvent(event) {
    let indexEdit;
    this.posts.filter((post, index)=> Object.values(post).forEach(value=>{
      if(value === event.id){
        indexEdit = index;
      }
      }));
    this.posts[indexEdit] = event;
    this.subModal$.componentInstance.sendPost.unsubscribe();
    this.subModal$.close();
  }

  editModalReference(event) {
    this.subModal$ = event;
  }

 async snackBarEvent(event){
    let backup = this.posts.map((x)=> x);
    let indexDelete;
    this.posts.filter((post, index)=> Object.values(post).forEach(value=>{
      if(value === event.id){
        indexDelete = index;
      }
      }));
    this.posts.splice( indexDelete, 1 );
    this.subSnack$ = await event.snack.onAction().subscribe(()=> this.posts = backup);
  }

}
