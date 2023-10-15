import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router: Router) {}

  table: any[] = [];
  getTable() {
    fetch("http://localhost:3000/table")
      .then((response) => response.json())
      .then((data) => {
        this.table = data;
        console.log(this.table);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
      this.getTable();
  }

}
