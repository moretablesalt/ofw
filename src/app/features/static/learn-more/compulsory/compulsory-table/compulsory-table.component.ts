import { Component } from '@angular/core';
import { PRODUCTS } from '../../../../../data/product-data';

@Component({
  selector: 'app-compulsory-table',
  imports: [],
  templateUrl: './compulsory-table.component.html',
  styleUrl: './compulsory-table.component.css',
})
export class CompulsoryTableComponent {
  public environment = 'sea';

  readonly products = PRODUCTS;

  public selectedProduct = this.products.find(p => p.id === 'A');

  setEnvironment(environment: 'sea' | 'land') {
    this.environment = environment
  }

  get selectedCoverages() {
    return this.environment === 'sea'
      ? this.selectedProduct?.seaCoverages ?? []
      : this.selectedProduct?.landCoverages ?? [];
  }
}
