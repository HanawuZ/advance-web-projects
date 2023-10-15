import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css'],
})
export class ListmenuComponent implements OnInit {
  orderedFood: any[] = [];
  tableId?: string;
  constructor(private orderService: DataService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.tableId = id?.toString();
      // Use the 'id' data in your component
    });

  }

  placeOrder() {
    const orderData = {
      order_foods: this.orderedFood,
      table_id: this.tableId,
    };

    this.orderService.placeOrder(orderData).subscribe(
      (result) => {
        console.log('Order placed successfully:', result);
        // You can reset the form or any other actions after a successful order
        this.orderedFood = [];
        this.tableId = '';
      },
      (error) => {
        console.error('Error placing the order:', error);
      }
    );
    this.router.navigate(['/home']);
    // Wait for a short delay and then reload the page
    setTimeout(() => {
      location.reload();
    }, 10);
  }

  getOrderedFood() {
    this.orderService.getOrderedFood(this.tableId!).subscribe(
      (data: any) => {
        this.orderedFood = data;
        console.log('Received ordered food data:', this.orderedFood);
      },
      (error) => {
        console.error('Error fetching ordered food data:', error);
      }
    );
  }

  updateOrderFood(id: any, flag: any) {
    this.orderService.updateOrderedFood(id, flag).subscribe(() => {
      this.getOrderedFood();
    });
  }

  deleteOrderedFood(_id: any) {
    this.orderService.deleteOrderedFood(_id).subscribe(() => {
      this.getOrderedFood();
    });
    location.reload();
  }

  ngOnInit(): void {
    this.getOrderedFood();
  }

  navigateToCheckBill() {
    this.router.navigate(['checkbill', this.tableId]);
  }
}
