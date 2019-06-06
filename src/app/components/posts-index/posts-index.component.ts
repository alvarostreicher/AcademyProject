import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';
import { Observable, Subscription } from 'rxjs';
import {  filter, map } from 'rxjs/operators';
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
  subFilter$: any;
  postFiltered;
  constructor(private apiCallService : ApiCallsService) { }

  ngOnInit( ) {
    this.getPosts();
  }

  ngOnDestroy( ) {
  }

  
  getPosts() : Observable<object[]> {
    return this.posts$ = this.apiCallService.combinePostsAndCategory$;
  }
  // getPosts() : object[] {
  //   this.sub$ = this.apiCallService.getPosts().subscribe((post)=> this.posts = post);
  //   return this.posts;
  // }

  postAddEvent (event) {
    this.apiCallService.addPost(event);
    this.subModal$.componentInstance.sendPost.unsubscribe();
    this.subModal$.close();
  }
  

  addModalReference (event) {
    this.subModal$ = event;
  }

  editPostEvent(event) {
    this.apiCallService.editPost(event);
    this.subModal$.componentInstance.sendPost.unsubscribe();
    this.subModal$.close();
  }

  editModalReference(event) {
    this.subModal$ = event;
  }

 async snackBarEvent(event){
    // let backup = this.posts.map((x)=> x);
    // let indexDelete;
    // this.posts.filter((post, index)=> Object.values(post).forEach(value=>{
    //   if(value === event.id){
    //     indexDelete = index;
    //   }
    //   }));
    // this.posts.splice( indexDelete, 1 );
    this.apiCallService.deletePost(event);
    this.subSnack$ = await event.snack.onAction().subscribe(() => this.apiCallService.backups());
    this.subSnack$ = await event.snack.afterDismissed().subscribe(()=> this.apiCallService.trueDelete(event))
  }

  onFilter(event) {
    this.apiCallService.selectCategory(event);
  }

}
