import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http'; // เพิ่ม HttpClient
import { map } from 'rxjs';
import { Validator } from '@angular/forms';

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
      user_name: ['', Validators.required,Validators.pattern('/^([a-z]*)$/')],
      firstname: ['',Validators.required,Validators.pattern('/^([A-Z][a-z]*)$/')],
      lastname: ['',Validators.required,Validators.pattern('/^([A-Z][a-z]*)$/')],
      password: ['',Validators.required,Validators.pattern('/^.{8,}$/')],
      Gender: [null,Validators.required],
      profile_picture: [null,Validators.required], // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
    });
  }

  adminForm = new FormGroup({
    user_name: new FormControl('', [Validators.required,Validators.pattern('/^([A-Z][a-z]*)$/')]),
    firstname: new FormControl('', [Validators.required,Validators.pattern('/^([A-Z][a-z]*)$/')]),
    lastname: new FormControl('', [Validators.required,Validators.pattern('/^([A-Z][a-z]*)$/')]),
    password: new FormControl('', [Validators.required,Validators.pattern('/^.{8,}$/')]),
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

    if (this.adminForm.invalid) {
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
