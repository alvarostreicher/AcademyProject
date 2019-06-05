import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  posts : Observable<object[]>;
  newPosts : BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);
  categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  selectedCategory$: Observable<string> = this.categorySubject.asObservable();
  combinePostsAndCategory$: Observable<object[]>;

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

  getCategories(): Observable<[]> {
   return this.http.get<[]>('http://localhost:3000/api/v1/categories')
  }

  getPosts(): Observable<object[]> {
    this.http.get<object[]>('http://localhost:3000/api/v1/posts').subscribe((post)=> this.newPosts.next(post));
    return this.newPosts;
  }

  addPost(objeto): Observable<object[]> {
    this.http.post<object[]>('http://localhost:3000/api/v1/posts', objeto).subscribe((response)=> this.newPosts.next([response].concat(this.newPosts.getValue())));
    return this.newPosts;
  }   

  getPost(id): Observable<object[]> {
    let path = `http://localhost:3000/api/v1/posts/${id}`;
    return this.http.get<object[]>(path);
  }

  editPost(data): Observable<object[]> {
    let path = `http://localhost:3000/api/v1/posts/post`;
    ////////me quede aqui edittando
    let change = this.newPosts.getValue()
    this.http.post<object[]>(path, data).subscribe((response) => this.newPosts.next(response)=> this.newPosts.next())
    return this.newPosts;
  }



}
