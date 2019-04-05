import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

    constructor(private http:HttpClient) { }
  //This is for current booking
    showcurrent () {
    return this.http.get('http://localhost:3000/current')
  }
  //This is to show past booking
  showp () {
    return this.http.get('http://localhost:3000/past')
  }
  //This is to show faqs
  link1 () {
    return this.http.get('http://localhost:3000/faq');
      }
  
}
