import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  api = 'http://localhost:3000/foods';
  foods: any[] = [];
  
  // Method for get the food via API
  getFood() {
    fetch(this.api)
      .then(response => response.json())
      .then(data => {
        this.foods = data;
        console.log(this.foods);
      })
      .catch(error => console.error(error));
  }

  ngOnInit(): void {
      this.getFood()
  }
}
