import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    RouterModule,
  ],
  template: `
    <main>
        <header class="brand-name">
          <a [routerLink]="['/']">
            <img src="/assets/logo.svg" alt="logo" class="brand-name">
          </a>
        </header>
      <section class="content">
        <router-outlet></router-outlet>
        <!-- <app-aboutus></app-aboutus> -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mikolajgajewski';
}
