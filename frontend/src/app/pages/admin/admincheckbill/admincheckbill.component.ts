import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincheckbill',
  templateUrl: './admincheckbill.component.html',
  styleUrls: ['./admincheckbill.component.css'],
})
export class AdminCheckbillComponent implements OnInit {
  order: any = {};
  constructor(private route : ActivatedRoute) {}

  getOrdered(table_id: string) {
    fetch(`http://localhost:3000/order/${table_id}`)
      .then((response) => response.json())
      .then((data) => {
        this.order = data; // Update the orderData object with the response data
        console.log(this.order);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOrdered(params['id']);
    });
  }
}
