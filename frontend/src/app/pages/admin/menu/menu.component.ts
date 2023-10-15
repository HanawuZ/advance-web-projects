import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  api = 'http://localhost:3000/foods';
  foods: any[] = [];

  constructor(private router: Router) {}

  // Method for get the food via API
  getFood() {
    fetch(this.api)
      .then((response) => response.json())
      .then((data) => {
        this.foods = data;
        console.log(this.foods);
      })
      .catch((error) => console.error(error));
  }

  deleteFood(id: any) {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/food' + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token!,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getFood();
      })
      .catch((error) => console.error(error));
  }
  getFoodByID(id: any) {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/food' + '/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token!,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('getFoodByID', data);

        // Navigate to the editmenu route and pass the id as a URL parameter
        this.router.navigate(['/editmenu', id]);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.getFood();
  }
}