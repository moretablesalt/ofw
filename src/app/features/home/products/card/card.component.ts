import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-card',
  imports: [
    RouterLink,
    NzButtonComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string;
  @Input() items: string[] = [];
  @Input() productDisabled = false;
  @Input() planId!: string;
  @Input() learnMoreLink!: string;

  isLoading = false;

  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);

  continue() {

    this.isLoading = true;
    setTimeout(() => {
      this.productService.setProductId(this.planId);
      this.router.navigate(['/policy'])
        .finally(() => this.isLoading = false)
    }, 500)
  }
}
