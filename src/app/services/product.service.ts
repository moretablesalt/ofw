import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productIdKey = 'product-id';
  private productId: string = '';

  setProductId(id: string) {
    this.productId = id;
    sessionStorage.setItem(this.productIdKey, id); // Save to sessionStorage
  }

  getProductId(): string {
    if (!this.productId) {
      // Load from sessionStorage if needed
      this.productId = sessionStorage.getItem(this.productIdKey) || '';
    }
    return this.productId;
  }

  clearProductId() {
    this.productId = '';
    sessionStorage.removeItem(this.productIdKey);
  }
}
