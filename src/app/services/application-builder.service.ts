import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PAYMENT_CONFIG } from '../app.constants';

interface PostResponse {
  id: number;
  referenceCode: string;
}

interface HashRequest {
  merchantId: string;
  orderRef: string;
  currCode: string;
  amount: string;
  payType: string;
}

interface HashResponse {
  secretHash: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationBuilderService {

  private readonly http = inject(HttpClient);

  constructor() { }

  postData(myData: any) {
    return this.http.post<PostResponse>('http://localhost:8080/api/applications', myData);
  }

  generateHash(refenceCode: string, amount: string) {

    const requestPayload: HashRequest = {
      merchantId: PAYMENT_CONFIG.merchantId,
      orderRef: refenceCode,
      currCode: PAYMENT_CONFIG.currCode,
      amount: amount,
      payType: PAYMENT_CONFIG.payType
    };

    return this.http.post<HashResponse>('http://localhost:8080/api/pesopay', requestPayload);
  }
}
