import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { PRODUCTS } from '../../../data/product-data';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-details2',
  imports: [],
  templateUrl: './details2.component.html',
  styleUrl: './details2.component.css'
})
export class Details2Component implements OnInit {
  private stepsService = inject(StepsService);
  private router = inject(Router);
  readonly productService = inject(ProductService);

  products = PRODUCTS;
  selectedProduct: Product | undefined;

  public type = 'dependents';

  ngOnInit(): void {
    this.stepsService.setStep(1);
    this.selectedProduct = this.products.find(p => p.id === this.productService.getProductId())
  }

  continue() {
    this.router.navigate(['/policy/application-form']);
  }

  setType(type: 'dependents' | 'ofw') {
    this.type = type;
  }
}
