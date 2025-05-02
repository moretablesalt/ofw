import { Component, inject, OnInit } from '@angular/core';
import { PRODUCTS } from '../../../data/product-data';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { QuoteCalculatorService } from '../../../services/quote-calculator.service';
import { StepsService } from '../steps/steps.service';
import { TitleCasePipe } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';

@Component({
  selector: 'app-plan-selection',
  imports: [
    TitleCasePipe,
    NzButtonComponent
  ],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent implements OnInit{

  public productService = inject(ProductService);
  private router = inject(Router);
  public quoteCalculatorService = inject(QuoteCalculatorService);
  public stepsService = inject(StepsService);
  public quoteDetailsService = inject(QuoteDetailsStorageService)

  products = PRODUCTS;

  chosenProduct: Product | undefined;
  isLoading = false;

  ngOnInit() {
    this.chosenProduct = this.products.find(p => p.id === this.productService.getProductId());
  }

  continue() {
    this.isLoading = true;

    setTimeout(() => {
      this.router.navigate(['/policy/application-form']).finally(() => this.isLoading = false);
    }, 500)
  }
}
