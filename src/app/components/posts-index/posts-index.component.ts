import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.scss']
})
export class PostsIndexComponent implements OnInit, OnDestroy {

  posts$ : Observable<object[]>;
  posts : object[];
  sub$ : any;


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
    this.sub$.componentInstance.sendPost.unsubscribe();
    this.sub$.close();
  }
  

  addModalReference (event) {
    this.sub$ = event;
  }

  editPostEvent(event) {
    let indexEdit;
    this.posts.filter((post, index)=> Object.values(post).forEach(value=>{
      if(value === event.id){
        indexEdit = index;
      }
      }));
    this.posts[indexEdit] = event;
    this.sub$.componentInstance.sendPost.unsubscribe();
    this.sub$.close();
  }

  editModalReference(event) {
    this.sub$ = event;
  }

}
