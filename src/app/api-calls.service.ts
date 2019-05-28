import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient ) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>('http://private-c3edb-postsmock.apiary-mock.com/categories')
  }

  getPosts(): Observable<object[]> {
    return this.http.get<object[]>('https://private-c3edb-postsmock.apiary-mock.com/posts')
  }
}
