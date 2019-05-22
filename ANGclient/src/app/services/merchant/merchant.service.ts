import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private apiUrl: string ;
  constructor() {
    this.apiUrl = 'https://mcba.dwsapp.io/api/merchant/';
  }
}
