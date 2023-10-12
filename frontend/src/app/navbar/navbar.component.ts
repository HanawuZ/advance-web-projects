import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAdmin: boolean;
  
  constructor() {
    const token = localStorage.getItem('token');
    this.isAdmin = token !== null;
  }
}
