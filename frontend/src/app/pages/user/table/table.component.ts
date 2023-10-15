import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router: Router , private DataService: DataService) {}

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

  onclick2nav(tables_id: string){
    //console.log(tables_id);
    this.DataService.sendTableId(tables_id);
    this.router.navigate(['/home']);
    //this.clickTable
  }

}
