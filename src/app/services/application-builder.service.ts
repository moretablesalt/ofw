import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PAYMENT_CONFIG } from '../app.constants';
import { environment } from '../../environments/environment';

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
    return this.http.post<PostResponse>(`${environment.BACKEND_API_URL}api/applications`, myData);
  }

  generateHash(refenceCode: string, amount: string) {

    const requestPayload: HashRequest = {
      merchantId: PAYMENT_CONFIG.merchantId,
      orderRef: refenceCode,
      currCode: PAYMENT_CONFIG.currCode,
      amount: amount,
      payType: PAYMENT_CONFIG.payType
    };

    return this.http.post<HashResponse>(`${environment.BACKEND_API_URL}api/pesopay`, requestPayload);
  }
}
