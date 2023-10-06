import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  <section class="listing-apply">
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name" id="name">Name</label>
      <input type="text" id="first-name" formControlName="firstName">
      <Label for="last-name">Surname</Label>
      <input type="text" id="last-name" formControlName="lastName">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <button type="submit">Submit</button>
    </form>
  </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])

    this.housingService.getHousingLocationsById(housingLocationId).then
    (housingLocation => {
      this.housingLocation = housingLocation;
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
