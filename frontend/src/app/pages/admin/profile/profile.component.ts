import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; // เพิ่ม HttpClient
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any;
  api: string = 'http://localhost:3000/';
  adminForm!: FormGroup;

  getAdmin(){
    
    let headers = new HttpHeaders(); // ใช้ HttpHeaders
    headers = headers.set('authorization', localStorage.getItem('token') || '');
    console.log(headers);

    return this.http.get<any>('http://localhost:3000/admin',{headers}).pipe(
      map((data) => {
        return data;
      })
    );
  }

  constructor(private router: Router, private http: HttpClient) {
    this.getAdmin().subscribe((data) => {
      this.user = data
      this.adminForm = new FormGroup({
        user_name: new FormControl(this.user.user_name, [
          Validators.required,
          Validators.pattern('B[0-9]{7}'),
        ]),
        firstname: new FormControl(this.user.firstname, [
          Validators.required,
          Validators.pattern('[A-Z][a-z]*'),
        ]),
        lastname: new FormControl(this.user.lastname, [
          Validators.required,
          Validators.pattern('[A-Z][a-z]*'),
        ]),
        password: new FormControl(this.user.password, [
          Validators.required,
          Validators.pattern('^.{8,}'),
        ]),
        Gender: new FormControl(this.user.Gender, Validators.required),
        profile_picture: new FormControl(this.user.profile_picture, [Validators.required]), // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
      });
    })
    // const json = localStorage.getItem('data');
    // console.log(JSON.parse(json!));
    // this.user = JSON.parse(json!);
    // console.log(this.user);

    
  }
  
  data: any[] = [];
  getGender() {
    return this.http.get<any>('http://localhost:3000/gender').pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateAdmin(id: any) {
    // Use the value of the FormGroup
    const profile = this.adminForm.value;
    const data = profile
    console.log(data);
    const token = localStorage.getItem('token');
    fetch(`${this.api}update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${token}` || '',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        
        // const new_data = {
        //   _id: data._id,
        //   user_name : data.user_name,
        //   firstname : data.firstname,
        //   lastname : data.lastname,
        //   Gender : data.gender,
        //   profile_picture : data.profile_picture
        // }

        // const json = JSON.stringify(new_data);
        // localStorage.setItem('data', json);
        console.log(data);
        Swal.fire('Edit success!', 'success').then(() => {
          this.router.navigate(['/']);
          setTimeout(() => {
            location.reload();
          }, 10);
        });
      })
      .catch((error) => console.error(error));
  }

  ngOnInit() {
    this.getGender().subscribe((data) => {
      this.data = data; // กำหนดค่าข้อมูลให้กับตัวแปร data
    });
  }

  updateGender(selectedGender: string) {
    this.user.Gender = selectedGender;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.profile_picture = file.name;
    }
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
          profile_picture: reader.result?.toString(),
        });
      };
    }
  }
}
