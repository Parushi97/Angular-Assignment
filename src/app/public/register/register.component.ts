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



  

  constructor(private fb: FormBuilder, 
    private route :Router,
    private postUser:PostConfigService) { 
      this.profileForm = fb.group({
        firstName: [null, Validators.required],
        lName: [null,Validators.required],
        email: [null,Validators.required],
        pno : [null,Validators.required],
        address: [null,Validators.required],
        password: [null,Validators.required],
        repeatpassword: [null,Validators.required],
        med:['']
        
      });
    }
  
   ngOnInit(){}

   onsubmit = function(user)

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
   
    
  

 


