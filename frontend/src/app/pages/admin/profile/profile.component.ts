import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any 
  constructor(){
    const json = localStorage.getItem('data')
    console.log(JSON.parse(json!))
    this.user = JSON.parse(json!)
    console.log(this.user)
  }


}
