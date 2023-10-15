import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary modules

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {
  api: string = "http://localhost:3000/food";
  name: string = "";
  picture: string = "";
  price: Number = 0;
  

  // Create a FormGroup with form controls
  insertFoodForm = new FormGroup({
    name: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
  });

  previewLoaded: boolean = false;

  // Method for adding food
  insertFood() {
    // Use the value of the FormGroup
    const data = this.insertFoodForm.value;
    const token = localStorage.getItem("token")
    // Make an HTTP POST request
    fetch(this.api, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        "authorization": token!},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        // Update the FormGroup with the new image value
        this.insertFoodForm.patchValue({
          picture: reader.result?.toString()
        });
      }
    }
  }
}