import { Component } from '@angular/core';


@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {

  api : string = "http://localhost:3000/food";
  name: string = "";
  picture: string = "";
  price: Number = 0;

  // Method for login
  insertFood(){
    const data = {
      name: this.name,
      picture: this.picture,
      price: this.price,
    }

    // http post for sign in
    fetch(this.api, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // console.log(this.foods);
    })
    .catch(error => console.error(error));
  } 
}
