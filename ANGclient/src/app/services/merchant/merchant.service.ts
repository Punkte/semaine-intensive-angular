import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private apiUrl: string ;
  constructor(
    private httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public readAllItems = (): Promise<any> => {
    return this.httpClient.get(this.apiUrl)
                          .toPromise()
                          .then(this.getData)
                          .catch(this.handleError);
  }

  private getData(res: any) {
    return res || {};
  }

  private handleError(err: any) {
    return Promise.reject(err.error);
  }
}
