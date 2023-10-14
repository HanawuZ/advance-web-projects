import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-admincheckbill',
  templateUrl: './admincheckbill.component.html',
  styleUrls: ['./admincheckbill.component.css'],
})
export class AdminCheckbillComponent implements OnInit {
  order: any = {};
  constructor() {}

  getOrdered() {
    fetch('http://localhost:3000/order/1')
      .then((response) => response.json())
      .then((data) => {
        this.order = data; // Update the orderData object with the response data
        console.log(this.order);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.getOrdered();
  }
}
