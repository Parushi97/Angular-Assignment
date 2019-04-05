import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { GetService } from '../mybooking/get.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
 

  cflag:boolean;
  pflag:boolean;
  detail:any;

  constructor(private getserv:GetService) { }
  //to show detail of questions
  ngOnInit() {
    this.cflag=true;
    this.getserv.link1().subscribe(res => {
     
      this.detail=res;
      console.log(res);
    });
  }
 //to show deatils of answer
 linkB() {
    
  this.getserv.link1().subscribe(response => {
   
    this.detail=response;
    console.log(this.detail);
    this.pflag=true;
    this.cflag=false;
    
    
    });
  }
    linkA(){
      
      this.cflag=true;
      this.pflag=false;
    } 
  }

  


