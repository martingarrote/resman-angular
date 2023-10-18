import { Injectable } from '@angular/core';
import { CustomerSelectComponent } from 'src/app/components/customer-select/customer-select.component';
import { RoomSelectComponent } from 'src/app/components/room-select/room-select.component';
import { ReservationSelectComponent } from 'src/app/components/reservation-select/reservation-select.component';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private customerSelectComponent: CustomerSelectComponent,
    private roomSelectComponent: RoomSelectComponent,
    private reservationSelectComponent: ReservationSelectComponent
    ) { }

  callSelectChange(entity: string) {
    let selectComponent;
    switch (entity) {
      case "customer":
        selectComponent = this.customerSelectComponent
        break;
      case "room":
        selectComponent = this.roomSelectComponent
      break;
      default:
        selectComponent = this.reservationSelectComponent
        break;
    }
    selectComponent.teste();
  }
}
