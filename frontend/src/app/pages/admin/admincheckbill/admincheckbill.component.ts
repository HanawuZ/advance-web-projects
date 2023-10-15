import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admincheckbill',
  templateUrl: './admincheckbill.component.html',
  styleUrls: ['./admincheckbill.component.css'],
})
export class AdminCheckbillComponent implements OnInit {
  order: any = {};
  constructor(private route: ActivatedRoute, private router: Router) { }

  getOrdered(table_id: string) {
    fetch(`http://localhost:3000/order/${table_id}`)
      .then((response) => response.json())
      .then((data) => {
        this.order = data; // Update the orderData object with the response data
        console.log(this.order);
      })
      .catch((error) => console.error(error));
  }

  insertPayment(tables_id: string) {
    // Use the value of the FormGroup

    const token = localStorage.getItem('token');
    // Make an HTTP POST request
    fetch('http://localhost:3000/payment' + '/' + tables_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token!,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'update tables success!',
          'tables has been updated.!',
          'success'
        ).then(() => {
          setTimeout(() => {
            this.router.navigate(['/statustable']);
          }, 1000); // รอ 2 วินาทีแล้วค่อยไปหน้า "login"
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Error',
          'An error occurred while processing your request.',
          'error'
        );
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOrdered(params['id']);
    });
  }
}
