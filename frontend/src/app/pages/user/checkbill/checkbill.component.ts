import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkbill',
  templateUrl: './checkbill.component.html',
  styleUrls: ['./checkbill.component.css'],
})
export class CheckbillComponent implements OnInit {
  order: any = {};
  tableId? : string;

  constructor(private activateRoute : ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.tableId = id?.toString();
      console.log(id);
      // Use the 'id' data in your component
    });
  }

  getOrdered() {
    fetch(`http://localhost:3000/order/${this.tableId}`)
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
