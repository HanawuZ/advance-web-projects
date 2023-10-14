import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  api: string = 'http://localhost:3000/signin';
  user_name: string = '';
  password: string = '';

  constructor(private router: Router) { }
  // Method for login
  login() {
    const data = {
      user_name: this.user_name,
      password: this.password,
    };

    // http post for sign in
    fetch(this.api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // ดึงข้อมูลเมื่อสถานะเป็น 200
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'username or password is incorrect.!',
          })
          throw new Error('เกิดข้อผิดพลาดในการร้องขอ'); // โยนข้อผิดพลาดเมื่อสถานะไม่ใช่ 200
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('data', JSON.stringify(data.result));
        
        console.log(data);
        console.log(localStorage.getItem('token'));

        Swal.fire('Login success!', 'welcome!!', 'success').then(() => {
          this.router.navigate(['/home']);
          setTimeout(() => {
            location.reload();
          }, 10);
        });

      })
      .catch((error) => console.error(error));
  }
}
