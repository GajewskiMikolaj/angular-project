import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    ProductComponent,
  ],
  template: `
  
    <section>
      <form action="">
        <input type="text">
        <button class="primary btn" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [HousingLocation]="housinglocation"></app-housing-location>
    </section>
    <section class="listing-products">
      <app-product [Product]="productList"></app-product>
    </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  housinglocation: Housinglocation = {
    id: 200,
    name: 'Test',
    city: 'Gdańsk',
    state: 'PL',
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1635506684/876f4ac6-57cf-4150-a794-7afedc76ec4a.jpg',
    availableUnit: 999,
    wifi: true,
    laundry: false,
  }

   productList: Products = {
    id: 999,
    productName: 'Mleko',
    price: 100,
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1635506684/876f4ac6-57cf-4150-a794-7afedc76ec4a.jpg',
    qty: 99,
    available: true,
  }
}