import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/service/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements  OnInit{

  isAdmin: boolean;
  tableId?: string;

  constructor(private router: Router,private DataService: DataService) {
    const token = localStorage.getItem('token');
    this.isAdmin = token !== null;
    this.DataService.tableId$.subscribe((tableId) => {
      this.tableId = tableId;
      localStorage.setItem("tableId",this.tableId);
      console.log(this.tableId);
    });
    this.tableId = localStorage.getItem("tableId")||'';
  }
  orderedFood: any[] = [];
  orderedItemCount: number = 0;

  getOrderedFood() {
    const table_id = localStorage.getItem('tableId');
    fetch(`http://localhost:3000/ordered_food/${table_id}`)
      .then((response) => response.json())
      .then((data) => {
        this.orderedFood = data;
        this.orderedItemCount = this.orderedFood.length;
        console.log(this.orderedFood);
      })
      .catch((error) => console.error(error));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');

    Swal.fire('Logout success!', 'welcome!!', 'success').then(() => {
      this.router.navigate(['/home']);
      setTimeout(() => {
        location.reload();
      }, 10);
    });
  }

  ngOnInit(): void {
    this.getOrderedFood();
  }

  navigateToListMenu() {
    console.log("tableId", this.tableId)
    this.router.navigate(['listmenu', localStorage.getItem("tableId")],);

  }
}
