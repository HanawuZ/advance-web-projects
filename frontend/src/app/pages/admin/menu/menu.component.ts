import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }
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
        Swal.fire('DELETE success!', 'food removed!!', 'success').then(() => {
          this.getFood();
        });
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  ngOnInit(): void {
    this.getFood()
  }
}
