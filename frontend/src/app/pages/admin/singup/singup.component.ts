import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http'; // เพิ่ม HttpClient
import { map } from 'rxjs';
import { Validator } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  api: string = "http://localhost:3000/signup";
  // constructor(private router: Router, private http: HttpClient) { } // เพิ่ม private http: HttpClient

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  user_name:string = "";
  firstname:string = "";
  lastname:string = "";
  password: string = "";
  Gender:string = "";
  profile_picture:string = "";

  adminForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.pattern('[a-z]*')]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^.{8,}')]),
    Gender: new FormControl(null, Validators.required),
    profile_picture: new FormControl('', [Validators.required]), // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
  });

  signup() {
    const formData = new FormData();

    // Append each form field to the formData object
    formData.append("user_name", this.adminForm.value.user_name as string);
    formData.append("firstname", this.adminForm.value.firstname as string);
    formData.append("lastname", this.adminForm.value.lastname as string);
    formData.append("password", this.adminForm.value.password as string);
    formData.append("Gender", this.adminForm.value.Gender || '');
    formData.append("profile_picture", this.adminForm.value.profile_picture as string);

    // const profilePicture: any = this.adminForm.value.profile_picture;
    // if (profilePicture) {
    //   formData.append("profile_picture", profilePicture, profilePicture.name);
    // }

    if (this.adminForm === null) {
      return;
    }

    if (this.adminForm.invalid) {
      let errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องดังนี้:';

      if (this.adminForm.get('user_name')?.hasError('required')) {
        errorMessage += '\n- กรอกชื่อผู้ใช้';
      }
      if (this.adminForm.get('user_name')?.hasError('pattern')) {
        errorMessage += '\n- รูปแบบชื่อผู้ใช้ไม่ถูกต้อง';
      }
      if (this.adminForm.get('firstname')?.hasError('required')) {
        errorMessage += '\n- กรอกชื่อ';
      }
      if (this.adminForm.get('firstname')?.hasError('pattern')) {
        errorMessage += '\n- รูปแบบชื่อไม่ถูกต้อง';
      }
      if (this.adminForm.get('lastname')?.hasError('required')) {
        errorMessage += '\n- กรอกนามสกุล';
      }
      if (this.adminForm.get('lastname')?.hasError('pattern')) {
        errorMessage += '\n- รูปแบบนามสกุลไม่ถูกต้อง';
      }
      if (this.adminForm.get('password')?.hasError('required')) {
        errorMessage += '\n- กรอกรหัสผ่าน';
      }
      if (this.adminForm.get('password')?.hasError('pattern')) {
        errorMessage += '\n- รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
      }
      if (this.adminForm.get('Gender')?.hasError('required')) {
        errorMessage += '\n- เลือกเพศ';
      }
      if (this.adminForm.get('profile_picture')?.hasError('required')) {
        errorMessage += '\n- เลือกรูปภาพโปรไฟล์';
      }

      Swal.fire('ข้อมูลไม่ถูกต้อง', errorMessage, 'error');
      return;
    }

    const data = {
     user_name : this.adminForm.get('user_name')?.value,
     password : this.adminForm.get('password')?.value,
     firstname: this.adminForm.get('firstname')?.value,
     lastname: this.adminForm.get('lastname')?.value,
     Gender: this.adminForm.get('Gender')?.value,
     profile_picture: this.adminForm.get('profile_picture')?.value
     }
     console.log(data)

    const headers = new HttpHeaders(); // ใช้ HttpHeaders
    headers.set('Content-Type', 'multipart/form-data');

    this.http.post("http://localhost:3000/signup", data, { headers })
      .subscribe((data: any) => {
        console.log(data);
        Swal.fire(
          'Singup success!',
          'You clicked the button!',
          'success'
        )
      }, (error: any) => {
        console.error(error);
        // Handle errors, for example, display an error message
      });
       // go to login page
       this.router.navigate(['/login']);
  }
  data: any[] = [];
  getGender() {
    return this.http.get<any>('http://localhost:3000/gender')
      .pipe(map(data => {
        return data;
      }))
  }
  ngOnInit() {
    this.getGender().subscribe(data => {
      this.data = data; // กำหนดค่าข้อมูลให้กับตัวแปร data
    });
  }
  previewLoaded: boolean = false;

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        // Update the FormGroup with the new image value
        this.adminForm.patchValue({
          profile_picture: reader.result?.toString()
        });
      }
    }
  }
}
