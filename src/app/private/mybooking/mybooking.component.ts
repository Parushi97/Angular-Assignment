import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';
import { CountBooking } from './countbookings.service';

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
  constructor(private getser:GetService, private count:CountBooking) { }
  // to show current bookings on page
  ngOnInit() {
    this.cflag=true;
    this.getser.showcurrent().subscribe(res => {
     
      this.detailcurrent=res;
      console.log(this.detailcurrent.length);
    });
  }
  // to show past bookings on page
  showpast() {
    
    this.getser.showp().subscribe(response => {
     
      this.detailpast=response;
      console.log(this.detailpast.length);
      this.pflag=true;//past flag is set to true 
      this.cflag=false;//current flag is set to false
      this.total = this.detailpast.length + this.detailcurrent.length;
      this.count.count = this.total;
      localStorage.setItem('total_value',this.total);
      });
    }
      currentflag(){
        
        this.cflag=true;
        this.pflag=false;
      }
      
  
    }


