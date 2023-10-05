import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
   <article>
      <img [src]="housingLocation?.photo" alt="">
      <h2 class="listing-headong">{{ housingLocation?.name }}</h2>
      <p>{{ housingLocation?.city }}</p>
      <p>{{ housingLocation?.wifi }}</p>
      <p>{{ housingLocation?.laundry }}</p>
      <p>{{ housingLocation?.state }}</p>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])

    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
}
