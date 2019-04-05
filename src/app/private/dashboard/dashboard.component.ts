import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { RouterModule, NavigationEnd } from '@angular/router';
import { CountBooking } from '../mybooking/countbookings.service';
import { GetService } from '../mybooking/get.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Name = JSON.parse(localStorage.getItem('user')).firstName;
  user: any;
  header:string;
  detailcurrent:any;
  detailpast:any;
  pflag:boolean;
  cflag:boolean;
  upcomingf = [];
  total;
  constructor(private router: Router, private count: CountBooking, private getser:GetService) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
   }
totalCount = JSON.parse(localStorage.getItem('total_value'));
   //to show user details initialy
  ngOnInit() {
    this.user = localStorage.getItem('user');
    console.log(JSON.parse(this.user));
    const t = JSON.parse(this.user);
    this.Name = t[0].firstName;
    console.log(this.Name);
    this.getser.showcurrent().subscribe(res => {
     
      this.detailcurrent=res;
      console.log(this.detailcurrent.length); 

    this.getser.showp().subscribe(response => {
     
      this.detailpast=response;
      console.log(this.detailpast.length);
      this.pflag=true;//past flag is set to true 
      this.cflag=false;//current flag is set to false
      this.total = this.detailpast.length + this.detailcurrent.length;
      this.count.count = this.total;
      localStorage.setItem('total_value',this.total);
      });
    });
  }
  //to show number of booking
  mybookings() {
    this.router.navigate(['dashboard/mybooking']);
    console.log(this.totalCount);
  }
  //to navigate 
  faq() {
    this.router.navigate(['dashboard/faq']);
  }
  //to clear local storage
  logout(){
    localStorage.clear();
    this.router.navigate(['/register']);
  }
  handleRouteChange = () => { 
    if (this.router.url.includes('authenticatedUser')) { 
    this.header = "PROFILE"; 
    } 
    //to show bookings header dynamically
    if (this.router.url.includes('mybooking')) { 
    this.header = "MY BOOKINGS"; 
    } 
    //to show bookings header dynamically
    if (this.router.url.includes('faq')) { 
    this.header = "FAQs"; 
    } 
    };

}
