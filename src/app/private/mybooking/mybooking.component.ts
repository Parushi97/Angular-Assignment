import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  
  detailcurrent:any;
  detailpast:any;
  pflag:boolean;
  cflag:boolean;
  upcomingf = [];
  total;
  constructor(private getser:GetService) { }
  ngOnInit() {
    this.cflag=true;
    this.getser.showcurrent().subscribe(res => {
     
      this.detailcurrent=res;
      console.log(this.detailcurrent.length);
    });
  }
  showpast() {
    
    this.getser.showp().subscribe(response => {
     
      this.detailpast=response;
      console.log(this.detailpast.length);
      this.pflag=true;
      this.cflag=false;
      this.total = this.detailpast.length + this.detailcurrent.length;
      localStorage.setItem('total_value',this.total);
      });
    }
      currentflag(){
        
        this.cflag=true;
        this.pflag=false;
      }
      
  
    }


