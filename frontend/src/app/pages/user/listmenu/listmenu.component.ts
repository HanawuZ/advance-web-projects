import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {

  orderedFood : any[] = [];

  constructor() {}
  getOrderedFood() {
    fetch('http://localhost:3000/ordered_food')
      .then(response => response.json())
      .then(data => {
        this.orderedFood = data;
        console.log(this.orderedFood);
      })
      .catch(error => console.error(error));
  }

  updateOrderFood(id: any , flag : any) {
    fetch(`http://localhost:3000/ordered_food/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        flag: flag,
      })
    }).then (() => {
      this.getOrderedFood()
    })
  }

  deleteOrderedFood(_id : any){
    fetch(`http://localhost:3000/ordered_food/${_id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then (() => {
      this.getOrderedFood()
    })
  }

  ngOnInit(): void {
    this.getOrderedFood()
  }
}
