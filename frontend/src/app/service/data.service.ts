import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  placeOrder(orderData: any) {
    console.log(orderData);
    return this.http.post(`${this.apiUrl}/order`, orderData);
  }

  getOrderedFood() {
    return this.http.get(`${this.apiUrl}/ordered_food`);
  }

  updateOrderedFood(id: any, flag: any) {
    const updateUrl = `${this.apiUrl}/ordered_food/${id}`;
    const body = { flag: flag };
    return this.http.put(updateUrl, body);
  }

  deleteOrderedFood(_id: any) {
    const deleteUrl = `${this.apiUrl}/ordered_food/${_id}`;
    return this.http.delete(deleteUrl);
  }

}
