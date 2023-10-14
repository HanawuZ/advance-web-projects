import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }
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

    if (this.insertFoodForm === null) {
      return;
    }
    if (this.insertFoodForm.invalid) {
      let errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องดังนี้:';

      if (this.insertFoodForm.get('name')?.hasError('required')) {
        errorMessage += '\n- กรุณาเพิ่มชื่ออาหาร';
      }
      if (this.insertFoodForm.get('picture')?.hasError('pattern')) {
        errorMessage += '\n- กรุณาเพิ่มรูปภาพอาหาร';
      }
      if (this.insertFoodForm.get('price')?.hasError('pattern')) {
        errorMessage += '\n- กรุณาเพิ่มราคาอาหาร';
      }
      Swal.fire('ข้อมูลไม่ถูกต้อง', errorMessage, 'error');
      return;
    }
    // Make an HTTP POST request
    fetch(this.api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire('Save success!', 'New menu added!!', 'success').then(() => {
          this.router.navigate(['/menu']);
        });

        console.log(data);
      })
      .catch(error => {
        Swal.fire(
          'Error!',
          'An error occurred while saving the menu.',
          'error'
        );
        this.router.navigate(['/addmenu']);
        console.error(error)
      });
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
