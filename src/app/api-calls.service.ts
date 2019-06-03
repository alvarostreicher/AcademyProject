import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  posts : Observable<object[]>;

  constructor(private http: HttpClient ) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>('http://private-c3edb-postsmock.apiary-mock.com/categories')
  }

  getPosts(): Observable<object[]> {
    this.posts = this.http.get<object[]>('https://private-c3edb-postsmock.apiary-mock.com/posts');
    return this.posts;
  }

  getPost(id): Observable<object[]> {
    let path = `https://private-c3edb-postsmock.apiary-mock.com/posts/${id}`;
    return this.http.get<object[]>(path)
  }



}
