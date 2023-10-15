import { Component } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  api = 'http://localhost:3000/foods';
  foods: any[] = [];
 
  orderFood(id : any) {
    // TODO: Add the food to the order
    console.log(id);
    const tableId = localStorage.getItem('tableId');
    const orderFoodApi = `http://localhost:3000/ordered_food/${id}`
    fetch(orderFoodApi, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({table_id: tableId})
    })
        location.reload();
  }

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

  ngOnInit(): void {
      this.getFood()
  }

}
