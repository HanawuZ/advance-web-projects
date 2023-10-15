import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-statustable',
  templateUrl: './statustable.component.html',
  styleUrls: ['./statustable.component.css'],
})
export class StatustableComponent implements OnInit {
  api = 'http://localhost:3000/';
  order: any = {};
  getOrdered() {
    fetch(`http://localhost:3000/order`)
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
