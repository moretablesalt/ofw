import { Component, inject } from '@angular/core';
import { FamilyShieldTableComponent } from './family-shield-table/family-shield-table.component';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-family-shield',
  imports: [
    FamilyShieldTableComponent,
  ],
  templateUrl: './family-shield.component.html',
  styleUrl: './family-shield.component.css'
})
export class FamilyShieldComponent {
  private router = inject(Router);
  private productService = inject(ProductService);

  continue(productId: string) {
    this.productService.setProductId(productId);
    this.router.navigate(['/policy']);
  }
}
