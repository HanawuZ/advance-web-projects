import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  api : string = "http://localhost:3000/signin";
  admin_id: string = "";
  password: string = "";

  // Method for login
  login(){
    const data = {
      admin_id: this.admin_id,
      password: this.password
    }

    // http post for sign in
    fetch(this.api, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token);
      console.log(data)

      // go to home page
      

      // console.log(this.foods);
    })
    .catch(error => console.error(error));
  } 
}
