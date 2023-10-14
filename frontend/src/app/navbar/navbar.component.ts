import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAdmin: boolean;
  tableId: string = '1';

  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    this.isAdmin = token !== null;
  }
  orderedFood: any[] = [];
  orderedItemCount: number = 0;

  getOrderedFood() {
    fetch('http://localhost:3000/ordered_food')
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
    this.router.navigate(['listmenu', this.tableId],);
      
  }
}
