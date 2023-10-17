import { Injectable } from '@angular/core';
import { Urls } from '../urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urlbase = `${Urls.BACK_PRODUCTION}/api/customers`

  public listAll(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.urlbase)
  }

  constructor(private http: HttpClient) { }
}
