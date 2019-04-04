import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UpdateService{
  constructor(private http:HttpClient){

  }
  register(id,par){
    console.log(par);
    return this.http.patch('http://localhost:3000/users/'+id, par);
  }
  showls(id){
    return this.http.get('http://localhost:3000/users',{
      params: {
        "id" : id
      }
    });
  }
}
