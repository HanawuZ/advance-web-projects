import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-admincheckbill',
  templateUrl: './admincheckbill.component.html',
  styleUrls: ['./admincheckbill.component.css'],
})
export class AdminCheckbillComponent implements OnInit {
  order: any = {};
  orderedFood: any[] = [];
  constructor() {}

  getOrdered() {
    fetch('http://localhost:3000/order')
      .then((response) => response.json())
      .then((data) => {
        this.order = data[0];
        console.log(this.order);
      })
      .catch((error) => console.error(error));
  }

  getOrderedFood() {
    fetch('http://localhost:3000/ordered_food')
      .then((response) => response.json())
      .then((data) => {
        this.orderedFood = data;
        console.log(this.orderedFood);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.getOrdered();
    this.getOrderedFood();
  }
}
