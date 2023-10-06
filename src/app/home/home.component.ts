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
        <input type="text" #filter>
        <button class="primary btn" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let HousingLocation of filteredLocationList"
       [housinglocationList]="HousingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  housinglocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService)
  filteredLocationList: Housinglocation[] = []


  constructor() {
    this.housingService.getAllHousingLocations().then
    ((housinglocationList: Housinglocation[]) => {
      this.housinglocationList = housinglocationList;
      this.filteredLocationList = housinglocationList;
    })
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housinglocationList;
    }
      this.filteredLocationList = this.housinglocationList.filter (
        HousingLocation => HousingLocation?.city.toLowerCase().includes
        (text.toLowerCase())
      )
  }
}
