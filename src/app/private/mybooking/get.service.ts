import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

    constructor(private http:HttpClient) { }
  showcurrent () {
    return this.http.get('http://localhost:3000/current')
  }
  showp () {
    return this.http.get('http://localhost:3000/past')
  }
  link1 () {
    return this.http.get('http://localhost:3000/faq');
      }
}
