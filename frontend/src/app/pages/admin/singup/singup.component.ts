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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.adminForm = this.fb.group({
      user_name: ['', Validators.required, Validators.pattern('B[0-9]{7}')],
      firstname: ['',Validators.required, Validators.pattern('[A-Z][a-z]*')],
      lastname: ['',Validators.required, Validators.pattern('[A-Z][a-z]*')],
      password: ['',Validators.required, Validators.pattern('^.{8,}')],
      Gender: [null,Validators.required],
      profile_picture: [null,Validators.required], // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
    });
  }

  adminForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^.{8,}')]),
    Gender: new FormControl(null, Validators.required),
    profile_picture: new FormControl(null, [Validators.required]), // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
  });

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (this.adminForm.get('profile_picture')) {
        this.adminForm.get('profile_picture')!.setValue(selectedFile); // ใส่ ! หลัง get('profile_picture')
      }
    }
  }

  signup() {
    const formData = new FormData();

    // Append each form field to the formData object
    formData.append("user_name", this.adminForm.value.user_name as string);
    formData.append("firstname", this.adminForm.value.firstname as string);
    formData.append("lastname", this.adminForm.value.lastname as string);
    formData.append("password", this.adminForm.value.password as string);
    formData.append("Gender", this.adminForm.value.Gender || '');

    const profilePicture: any = this.adminForm.value.profile_picture;
    if (profilePicture) {
      formData.append("profile_picture", profilePicture, profilePicture.name);
    }

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
        errorMessage += '\n- อัปโหลดรูปโปรไฟล์';
      }

      Swal.fire('ข้อมูลไม่ถูกต้อง', errorMessage, 'error');
      return;
    }

    const headers = new HttpHeaders(); // ใช้ HttpHeaders
    headers.set('Content-Type', 'multipart/form-data');

    this.http.post("http://localhost:3000/signup", formData, { headers })
      .subscribe((data: any) => {
        console.log(data);
        // Handle the response accordingly, for example, navigate to a success page
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
}
