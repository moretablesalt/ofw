import { Component, inject } from '@angular/core';
import { CompulsoryTableComponent } from './compulsory-table/compulsory-table.component';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-compulsory',
  imports: [
    CompulsoryTableComponent
  ],
  templateUrl: './compulsory.component.html',
  styleUrl: './compulsory.component.css'
})
export class CompulsoryComponent {
  private router = inject(Router);
  private productService = inject(ProductService);

  continue(productId: string) {
    this.productService.setProductId(productId);
    this.router.navigate(['/policy']);
  }
}
