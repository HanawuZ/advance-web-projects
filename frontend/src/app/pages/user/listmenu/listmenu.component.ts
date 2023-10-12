import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {

  orderedFood : any[] = [];

  getOrderedFood() {
    fetch('http://localhost:3000/ordered_food')
      .then(response => response.json())
      .then(data => {
        this.orderedFood = data;
        console.log(this.orderedFood);
      })
      .catch(error => console.error(error));
  }

  ngOnInit(): void {
    this.getOrderedFood()
  }
}
