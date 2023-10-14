import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css'],
})
export class EditmenuComponent implements OnInit {
  api: string = 'http://localhost:3000/food';
  name: string = '';
  picture: string = '';
  price: Number = 0;
  foods: any;
  id: any; // Define the 'id' property
  constructor(private router: Router, private route: ActivatedRoute) {}

  updateFoodForm = new FormGroup({
    name: new FormControl(''),
    picture: new FormControl(''),
    price: new FormControl(0),
  });

  updateFood(id: any) {
    // Use the value of the FormGroup
    const data = {
      name: this.updateFoodForm.get('name')!.value || this.foods.name,
      price: this.updateFoodForm.get('price')!.value || this.foods.price,
      picture: this.updateFoodForm.get('picture')!.value || this.foods.picture,
    };
    const token = localStorage.getItem('token');
    fetch(this.api + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: token!,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire('Edit success!', 'success').then(() => {
          this.router.navigate(['/menu']);
          setTimeout(() => {
            location.reload();
          }, 10);
        });
      })
      .catch((error) => console.error(error));
  }
  getFoodByID(id: any) {
    const token = localStorage.getItem('token');
    const apiUrl = 'http://localhost:3000/food/' + id;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token!,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            'API response error:',
            response.status,
            response.statusText
          );
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log('API response data', data);
          this.foods = data;
        } else {
          console.error('API response data is null.');
        }
      })
      .catch((error) => {
        console.error('API fetch error:', error);
      });
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
        this.updateFoodForm.patchValue({
          picture: reader.result?.toString(),
        });
      };
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Get the 'id' parameter from the route
      console.log(this.id);
      this.getFoodByID(this.id); // Call the function with the retrieved 'id'
    });
  }
}
