import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.navbar.html',
 
})
export class PublicComponent implements OnInit {
  title = 'pro4';
  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Register',
            link: './register',
            index: 0
        }, {
            label: 'Signup ',
            link: './signup',
            index: 1
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}