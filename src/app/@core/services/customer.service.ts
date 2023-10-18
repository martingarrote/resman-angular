import { Injectable } from '@angular/core';
import { Urls } from '../urls';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CustomerModel } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urlBase = `${Urls.BACK_CURRENT}/api/customers`

  public create(customer: CustomerModel): Observable<number> {
      return this.http.post<number>(this.urlBase, customer)
  }

  public listAll(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.urlBase).pipe(
      catchError((error) => {
        console.error(error)
        return of([])
      })
    )
  }

  public findById(id: number): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${this.urlBase}/${id}`)
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`)
  }

  constructor(private http: HttpClient) { }
}
