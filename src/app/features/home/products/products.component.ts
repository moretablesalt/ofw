import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  private router = inject(Router);

  private productService = inject(ProductService);

  continue(productId: string) {
    this.productService.setProductId(productId);
    this.router.navigate(['/policy']);
  }
}
