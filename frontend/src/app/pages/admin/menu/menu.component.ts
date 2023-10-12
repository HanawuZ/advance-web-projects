import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  api = 'http://localhost:3000/foods';
  foods: any[] = [];

  // Method for get the food via API
  getFood() {
    fetch(this.api)
      .then(response => response.json())
      .then(data => {
        this.foods = data;
        console.log(this.foods);
      })
      .catch(error => console.error(error));
  }

  deleteFood(id: any) {
    fetch("http://localhost:3000/food" + '/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.getFood();
      })
      .catch(error => console.error(error));
  }

  ngOnInit(): void {
    this.getFood()
  }
}
