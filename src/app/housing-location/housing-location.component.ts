import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <img [src]="HousingLocation.photo" alt="Photo" class="listing-photo">
    <h2 class="listing-heading">{{ HousingLocation.name }}</h2>
    <p class="listing-location">{{ HousingLocation.city }}, {{ HousingLocation.state }}</p>
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() HousingLocation!: Housinglocation
}

