import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//to post the data
export class PostConfigService{
  constructor(private http:HttpClient){

  }
  register(user:any[]){
    return this.http.post('http://localhost:3000/users',user);
    
  }
}
