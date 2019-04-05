import { Component, OnInit, ViewChild } from '@angular/core';
import {  Validators, NgForm } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import {PostConfigService} from './post-config.service'

import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileForm:FormGroup;
  load:boolean;
  post:any;
  description:string='';
  email:string='';
  alert:string='field is empty';



  
//to intiallize the form fields
  constructor(private fb: FormBuilder, 
    private route :Router,
    private postUser:PostConfigService) { 
      this.profileForm = fb.group({
        firstName: [null, Validators.required],
        lName: [null,Validators.required],
        email: [null,Validators.compose([Validators.required,Validators.email])],
        pno : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
        address: [null,Validators.required],
        password: [null,Validators.required],
        repeatpassword: [null,Validators.required],
        med:['']
        
      });
    }
  
   ngOnInit(){}

   onsubmit = function(user)
    //to navigate to signup
    {
    this.postUser.register(user)
      .subscribe(
        (response) => {console.log(response);
          this.route.navigate(['signup']);
        },
        (error) => console.log(error)
        
        );
        
     }
    

   }
   
    
  

 


