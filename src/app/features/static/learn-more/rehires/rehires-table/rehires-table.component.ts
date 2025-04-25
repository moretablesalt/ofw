import { Component } from '@angular/core';
import {PRODUCTS} from '../../../../../data/product-data';

@Component({
  selector: 'app-rehires-table',
  imports: [],
  templateUrl: './rehires-table.component.html',
  styleUrl: './rehires-table.component.css'
})
export class RehiresTableComponent {
  public environment = 'sea';

  readonly products = PRODUCTS;

  public selectedProduct = this.products.find(p => p.id === 'B');

  setEnvironment(environment: 'sea' | 'land') {
    this.environment = environment
  }

  get selectedCoverages() {
    return this.environment === 'sea'
      ? this.selectedProduct?.seaCoverages ?? []
      : this.selectedProduct?.landCoverages ?? [];
  }
}
