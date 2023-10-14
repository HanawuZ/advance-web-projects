import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  api: string = 'http://localhost:3000/signin';
  user_name: string = '';
  password: string = '';

  constructor(private router: Router) {}
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
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('data', JSON.stringify(data.result));
        
        console.log(data);
        console.log(localStorage.getItem('token'));

        // go to home page
        this.router.navigate(['/home']);

        // Wait for a short delay and then reload the page
        setTimeout(() => {
          location.reload();
        }, 10);
        // console.log(this.foods);
      })
      .catch((error) => console.error(error));
  }
}
