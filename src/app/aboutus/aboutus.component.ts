import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="list">
    <ul class="list-menu">
        <li>Offer</li>
        <li>Prices</li>
        <li>Contact</li>
      </ul>
  </div>
  `,
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

}
