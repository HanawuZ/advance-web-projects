import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary modules

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css'],
})
export class AddmenuComponent {
  api: string = 'http://localhost:3000/food';
  name: string = '';
  picture: string = '';
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
    const token = localStorage.getItem('token');
    // Make an HTTP POST request
    fetch(this.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token!,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  onChangeImg(event: any) {
    const file = event.target.files[0];
    const maxSizeKB = 1024; // ระบุขนาดสูงสุดใน KB ที่คุณต้องการ
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    if (file.size / 1024 > maxSizeKB) {
      console.error('ขนาดรูปภาพใหญ่เกินไป');
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      console.error('ประเภทของไฟล์รูปภาพไม่ถูกต้อง');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      // เรียกใช้งาน API สำหรับการเพิ่มรูปภาพในฐานข้อมูล
      this.insertFoodForm.controls['picture'].setValue(reader.result as string);
      this.previewLoaded = true;
    };

    reader.readAsDataURL(file);
  }
}