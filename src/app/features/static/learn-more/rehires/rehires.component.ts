import { Component, inject } from '@angular/core';
import { RehiresTableComponent } from './rehires-table/rehires-table.component';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-rehires',
  imports: [
    RehiresTableComponent
  ],
  templateUrl: './rehires.component.html',
  styleUrl: './rehires.component.css'
})
export class RehiresComponent {
  private router = inject(Router);
  private productService = inject(ProductService);

  continue(productId: string) {
    this.productService.setProductId(productId);
    this.router.navigate(['/policy']);
  }
}
