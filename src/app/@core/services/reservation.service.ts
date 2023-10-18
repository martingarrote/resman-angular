import { Injectable } from '@angular/core';
import { Urls } from '../urls';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ReservationModel } from '../reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlBase = `${Urls.BACK_CURRENT}/api/reservations`

  public create(reservation: ReservationModel): Observable<number> {
    return this.http.post<number>(this.urlBase, reservation)
  }

  public listAll(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(this.urlBase).pipe(
      catchError((error) => {
        console.error(error)
        return of([])
      })
    )
  }

  public findById(id: number): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(`${this.urlBase}/${id}`)
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`)
  }

  constructor(private http: HttpClient) { }
}
