import { Component, OnInit, ViewChild } from '@angular/core';
import {  Validators, NgForm, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router'
import{GetServiceService} from './get-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm1:FormGroup;
  load:boolean;
  post:any;
  description:string='';
  email:string='';
  alert:string='field is empty';
  getdata;
  
  
  
  constructor(private fb: FormBuilder,private get:GetServiceService,private routee :Router) {
    this.profileForm1 = fb.group({
      email: [null,Validators.compose([Validators.required,Validators.email])],
        
      password: [null, Validators.required]
    });
   }

  ngOnInit() {
    
  
  }
  //to check the credentails from local storage

  saveas(): void {
    var user;
    this.get.save(this.profileForm1.value).subscribe(res => {
      this.getdata=res;
      console.log(res);
      if((Object.keys(res).length)==0){
        console.log("invalid");
      }
      else{
        localStorage.setItem('user',JSON.stringify(res));
        localStorage.setItem("user_cred","true");
        console.log("valid");
        this.routee.navigate(['/dashboard/profile']);
      }
      });
      

  }
}



