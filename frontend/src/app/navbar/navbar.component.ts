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
  orderedFood: any[] = [];
  orderedItemCount: number = 0;

  getOrderedFood() {
    fetch('http://localhost:3000/ordered_food')
      .then((response) => response.json())
      .then((data) => {
        this.orderedFood = data;
        this.orderedItemCount = this.orderedFood.length;
        console.log(this.orderedFood);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.getOrderedFood();
  }
}
