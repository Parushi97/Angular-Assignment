import { Component, OnInit ,ViewChild } from '@angular/core';
import {  Validators, NgForm, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import {UpdateService} from '../profile/update.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      value;
      res;

      new_user={
        firstName:'',
        password:'',
        lName:'',
        email:'',
        pno:'',
        address:'',
        repeatpassword:'',
        med:'',
        id:''
      }
    
    @ViewChild('profileForm3') public signup : NgForm;
      profileForm3 = this.fb.group({
        fName: [JSON.parse(localStorage.getItem('user'))[0].firstName, Validators.required],
        email: [JSON.parse(localStorage.getItem('user'))[0].email,Validators.required],
        pno : [JSON.parse(localStorage.getItem('user'))[0].pno,Validators.required],
        address: [JSON.parse(localStorage.getItem('user'))[0].address,Validators.required],
        med:[JSON.parse(localStorage.getItem('user'))[0].med],
       
      });
      
  constructor(private fb: FormBuilder,private route :Router, private update:UpdateService) { }

  ngOnInit() {
  }
  onsubmit = function(user)
    {
      this.new_user.firstName = this.profileForm3.get('firstName').value;
      this.new_user.email = this.profileForm3.get('email').value;
      this.new_user.pno = this.profileForm3.get('pno').value;
      this.new_user.address = this.profileForm3.get('address').value;
      this.new_user.med = this.profileForm3.get('med').value;
      this.new_user.password = JSON.parse(localStorage.getItem('user'))[0].password;
      this.new_user.repeatpassword = JSON.parse(localStorage.getItem('user'))[0].repeatpassword;
      this.new_user.password = JSON.parse(localStorage.getItem('user'))[0].password;
      this.new_user.lName = JSON.parse(localStorage.getItem('user'))[0].lname;
      this.new_user.id = JSON.parse(localStorage.getItem('user'))[0].id;
       this.update.register(JSON.parse(localStorage.getItem('user'))[0].id,user)
      .subscribe(( response=> {
        //localStorage.setItem("user",JSON.stringify(this.new_user));
        console.log(response)}));
        this.update.showls(this.profileForm3.value).subscribe(response => {
          let temp = [this.profileForm3.value]
          localStorage.setItem('user',JSON.stringify(temp));
        })
    }
    
    
         
      
}




  