import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
   <section class="listing">
    <img [src]="housinglocationList.photo" alt="Photo" class="listing-photo">
    <h2 class="listing-heading">{{ housinglocationList.name }}</h2>
    <p class="listing-location">{{ housinglocationList.city }}, {{ housinglocationList.state }}</p>
    <a class="read-more" [routerLink]="['/details', housinglocationList.id]">Read more</a>
   </section>

  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housinglocationList!: Housinglocation
}

