import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  posts : Observable<object[]>;
  categori;

  constructor(private http: HttpClient ) { }

  getCategories(): Observable<[]> {
   return this.http.get<[]>('http://localhost:3000/api/v1/categories')
  }

  getPosts(): Observable<object[]> {
    return this.http.get<object[]>('http://localhost:3000/api/v1/posts');
  }

  addPost(objeto): Observable<object[]> {
    console.log('entrooooo')
    return this.http.post<object[]>('http://localhost:3000/api/v1/posts', objeto);
  }   

  getPost(id): Observable<object[]> {
    let path = `http://localhost:3000/api/v1/posts/${id}`;
    return this.http.get<object[]>(path)
  }



}
