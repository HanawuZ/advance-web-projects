import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-statustable',
  templateUrl: './statustable.component.html',
  styleUrls: ['./statustable.component.css'],
})
export class StatustableComponent implements OnInit {
  api = 'http://localhost:3000/';
  table: any = {};
  constructor(private router: Router){}
  getTable() {
    fetch(`http://localhost:3000/table`)
      .then((response) => response.json())
      .then((data) => {
        this.table = data; // Update the orderData object with the response data
        console.log(this.table);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
    this.getTable();
  }

  nagivateToAdminCheckbill(table_id: string) { 
    this.router.navigate(['admincheckbill', table_id],);
  }
}
