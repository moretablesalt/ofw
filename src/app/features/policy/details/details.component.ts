import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { PRODUCTS } from '../../../data/product-data';
import { Details2Component } from '../details2/details2.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-details',
  imports: [
    Details2Component,
    NzButtonComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  private stepsService = inject(StepsService);
  private router = inject(Router);
  public productService = inject(ProductService);
  public quoteDetailsService = inject(QuoteDetailsStorageService);

  products = PRODUCTS;

  public selectedProduct: Product | undefined;
  isLoading = false;

  ngOnInit(): void {
    this.stepsService.setStep(1);
    this.selectedProduct = this.products.find(p => p.id === this.productService.getProductId())
  }

  continue() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/policy/application-form']);
      }, 500)
  }
}
