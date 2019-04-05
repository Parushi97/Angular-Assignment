import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetfaqService {
  //to get faq data from db.json
  constructor(private http:HttpClient) { }
  link1 (parm): Observable<any> {
    return this.http.get('http://localhost:3000/faq',{params:parm});
      }
      
}

