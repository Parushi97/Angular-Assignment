import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http:HttpClient) { }
  save (parm): Observable<any> {
    return this.http.get('http://localhost:3000/users',{params:parm});
      }
      
}

