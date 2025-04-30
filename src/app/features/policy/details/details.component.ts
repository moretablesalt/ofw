import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { PRODUCTS } from '../../../data/product-data';
import { InsuranceEnvironmentService } from '../../../services/insurance-environment.service';
import { Details2Component } from '../details2/details2.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';

interface Coverage {
  coverage: string;
  amount: string;
  note?: string;
}


interface Product {
  id: string;
  seaCoverages: Coverage[];
  landCoverages: Coverage[];
}

@Component({
  selector: 'app-details',
  imports: [
    Details2Component,
    NzButtonComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  private stepsService = inject(StepsService);
  private router = inject(Router);
  public productService = inject(ProductService);
  public insuranceEnvironmentService = inject(InsuranceEnvironmentService);

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

  setEnvironment(type: 'sea' | 'land') {
    this.insuranceEnvironmentService.setEnvironment(type);
  }
}
