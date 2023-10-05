import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
  ],
  template: `
    <main>
      <header class="brand-name">
        <img src="/assets/logo.svg" alt="logo" class="brand-name">
      </header>
      <section class="content">
        <app-home></app-home>
        <!-- <app-aboutus></app-aboutus> -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mikolajgajewski';
}
