import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient ) { }

  getCategories(): Observable<object[]> {
    return this.http.get<object[]>('http://172.22.129.92:5000/api/v1/categories')
  }
}
