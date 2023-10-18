import { Injectable } from '@angular/core';
import { Urls } from '../urls';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { RoomModel } from '../room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private urlBase = `${Urls.BACK_CURRENT}/api/rooms`

  public create(room: RoomModel): Observable<number> {
    return this.http.post<number>(this.urlBase, room)
  }

  public listAll(): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(this.urlBase).pipe(
      catchError((error) => {
        console.error(error)
        return of([])
      })
    )
  }

  public findByBusy(busy: boolean): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(`${this.urlBase}/status?busy=${busy}`)
  }

  public findById(id: number): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(`${this.urlBase}/${id}`)
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`)
  }

  constructor(private http: HttpClient) { }
}

