import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Name = JSON.parse(localStorage.getItem('user')).firstName;
  user: any;
  header:string;
  constructor(private router: Router) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
   }
totalCount = JSON.parse(localStorage.getItem('total_value'));

  ngOnInit() {
    this.user = localStorage.getItem('user');
    console.log(JSON.parse(this.user));
    const t = JSON.parse(this.user);
    this.Name = t[0].firstName;
    console.log(this.Name);
  }

  mybookings() {
    this.router.navigate(['dashboard/mybooking']);
    console.log(this.totalCount);
  }
  faq() {
    this.router.navigate(['dashboard/faq']);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/register']);
  }
  handleRouteChange = () => { 
    if (this.router.url.includes('authenticatedUser')) { 
    this.header = "PROFILE"; 
    } 
    if (this.router.url.includes('mybooking')) { 
    this.header = "MY BOOKINGS"; 
    } 
    if (this.router.url.includes('faq')) { 
    this.header = "FAQs"; 
    } 
    };

}
