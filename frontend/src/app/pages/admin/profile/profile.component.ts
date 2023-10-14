import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; // เพิ่ม HttpClient
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any 
  constructor(private http: HttpClient){
    const json = localStorage.getItem('data')
    console.log(JSON.parse(json!))
    this.user = JSON.parse(json!)
    console.log(this.user)
  }
  adminForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]*')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^.{8,}')]),
    Gender: new FormControl(null, Validators.required),
    profile_picture: new FormControl(null, [Validators.required]), // ให้แน่ใจว่า profile_picture ถูกเพิ่มตรงนี้
  });

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

  updateGender(selectedGender: string) {
    this.user.Gender = selectedGender;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.profile_picture = file.name;
    }
  }

}
