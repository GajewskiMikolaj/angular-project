import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { HousingService } from '../housing.service';

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
      <app-housing-location *ngFor="let HousingLocation of housinglocationList"
       [housinglocationList]="HousingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  housinglocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService)

  constructor() {
    this.housinglocationList = this.housingService.getAllHousingLocation()
  }

}
