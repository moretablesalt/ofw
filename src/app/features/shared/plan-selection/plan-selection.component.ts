import { Component, inject, OnInit } from '@angular/core';
import { InsuranceEnvironmentService } from '../../../services/insurance-environment.service';
import { PRODUCTS } from '../../../data/product-data';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-selection',
  imports: [],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent implements OnInit{

  public insuranceEnvironmentService = inject(InsuranceEnvironmentService);
  public productService = inject(ProductService);
  private router = inject(Router);

  products = PRODUCTS;

  chosenProduct: Product | undefined;

  ngOnInit() {
    this.chosenProduct = this.products.find(p => p.id === this.productService.getProductId());
  }

  onSelect(env: 'sea' | 'land') {
    this.insuranceEnvironmentService.setEnvironment(env);
  }

  continue() {
    this.router.navigate(['/policy/details']);
  }

  changePlan() {
    this.router.navigate(['']);
  }
}
