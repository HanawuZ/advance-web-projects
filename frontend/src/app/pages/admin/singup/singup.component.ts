// Import required modules at the top of your component
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  // api: string = "http://localhost:3000/signup";
  // user_name: string = "";
  // firstname: String = "";
  // lastname: String = "";
  // password: string = "";
  // Gender: gender;
  // profile_picture: String = "";

  // constructor(private router: Router) { }

  // singup() {
  //   // Create a new FormData object
  //   const formData = new FormData();

  //   // Add form fields to the FormData object
  //   formData.append("user_name", this.user_name);
  //   formData.append("firstname", this.firstname);
  //   formData.append("lastname", this.lastname);
  //   formData.append("password", this.password);
  //   formData.append("Gender", this.Gender);

  //   // Add the profile_picture file to the FormData
  //   formData.append("profile_picture", this.profile_picture);

  //   // Make a POST request with the FormData
  //   fetch(this.api, {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error));
  // }
}
