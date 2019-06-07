import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from './Interfaces/posts';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  posts : Observable<object[]>;
  newPosts : BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>([]);
  categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  selectedCategory$: Observable<string> = this.categorySubject.asObservable();
  combinePostsAndCategory$: Observable<Posts[]>;
  backup : BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>([]);
  url = `http://localhost:3000`;
  undo = false;
  singlePost : BehaviorSubject<Posts> = new BehaviorSubject<Posts>({_id: null,
    title: '',
    description: '',
    shortDescription: '',
    category: '',
    comments: [],
    image: ''});

  constructor(private http: HttpClient ) { 
    this.getPosts();
    this.combinePostsAndCategory$ = 
    combineLatest(this.newPosts, this.selectedCategory$).pipe(
      map(this.filterPosts.bind(this))
    );
   }

   filterPosts([posts, category]) {
    if(category === 'all') {
      return posts;
    }
    return posts.filter(post => post.category === category);
  }

  public selectCategory(category: string) {
    this.categorySubject.next(category);
  }
  @Cacheable()
  getCategories(): Observable<[]> {
   return this.http.get<[]>(`${this.url}/api/v1/categories`)
  }

  getPosts(): Observable<object[]> {
    this.http.get<Posts[]>(`${this.url}/api/v1/posts`).subscribe((post)=> this.newPosts.next(post), (error)=> console.log(error));
    return this.newPosts;
  }

  addPost(objeto): Observable<object[]> {
    this.http.post<Posts>(`${this.url}/api/v1/posts`, objeto).subscribe((response)=> this.newPosts.next([response].concat(this.newPosts.getValue())), (error)=> console.log(error));
    return this.newPosts;
  }   

  getPost(id): Observable<Posts> {
    let path = `${this.url}/api/v1/posts/${id}`;
    this.http.get<Posts>(path).subscribe((response)=> this.singlePost.next(response));
    return this.singlePost;
  }

  editPost(data): Observable<object[]> {
    let path = `${this.url}/api/v1/posts/post`;
    let edit;
    this.http.post<Posts>(path, data).subscribe((response) => edit = this.newPosts.getValue().map( (post) => {
      if(post._id === response._id){
        return Object.assign(post, response)
      }else {
        return post;
      }
    } ) , (error)=> console.log(error) )
    return this.newPosts;
  }

  deletePost(post) {
    this.backup.next(this.newPosts.getValue());
    let deleted = this.newPosts.getValue().filter((posts)=>posts._id !== post.id);
    this.newPosts.next(deleted);
  }

  backups () {
    this.undo = true;
    this.newPosts.next(this.backup.getValue());
  }

  trueDelete(post) {
    if(!this.undo){
      this.http.post(`${this.url}/api/v1/posts/delete`, {_id: post.id}).subscribe((response)=>response, (error)=> console.log(error))
    }
    this.undo = false;
  }

  addComment(comment) {
    this.http.post(`${this.url}/api/v1/posts/comment/${comment.id}`,comment.body).subscribe((response)=> this.singlePost.getValue().comments.push(comment.body), (err)=> err);
  }

}
