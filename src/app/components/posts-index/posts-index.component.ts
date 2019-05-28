import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.scss']
})
export class PostsIndexComponent implements OnInit {

  posts$ : Observable<object[]>;

  constructor(private apiCallService : ApiCallsService) { }

  ngOnInit( ) {
    this.getPosts();
  }

  getPosts() : Observable<object[]> {
    return this.posts$ = this.apiCallService.getPosts();
  }

  
}
