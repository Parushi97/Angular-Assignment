import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'pro4';
  // links = ['Register', 'Login'];
  // activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'success';
  }
  
}
