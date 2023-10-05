import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="item-product">
    <img [src]="Product.photo" alt="">
    <p>{{ Product.productName }}</p>
    <p>{{ Product.price }}</p>
    <p>{{ Product.qty }}</p>
  </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() Product!:Products
}
