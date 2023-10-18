import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from 'src/app/@core/services/reservation.service';
import { RoomService } from 'src/app/@core/services/room.service';
import { CustomerService } from 'src/app/@core/services/customer.service';
import { CustomerModel } from 'src/app/@core/customer.model';
import { RoomModel } from 'src/app/@core/room.model';
import { ReservationModel } from 'src/app/@core/reservation.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectForm: FormGroup;
  public filterComponent = '';

  public customerList: CustomerModel[];
  public roomList: RoomModel[];
  public reservationList: ReservationModel[];

  public alertOpen: boolean;
  public alertStatus: string;
  public alertMessage: string;

  constructor(
      private formBuilder: FormBuilder, 
      private reservationService: ReservationService, 
      private roomService: RoomService, 
      private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  public createForm() {
    this.selectForm = this.formBuilder.group({
      value: 'reservation'
    })
    this.getSelectedEntity()
  }

  public getSelectedEntity() {
    this.filterComponent = this.selectForm.value["value"];
    this.populateSelects()
  }

  public populateSelects() {
    switch (this.filterComponent) {
      case "room":
        this.getAllRooms();
        break
      case "customer":
        this.getAllCustomers();
        break
      default:
        this.getAllReservations()
        this.getAllCustomers()
        this.getAllRooms()
        break;
    }
  }

  public getAllCustomers() {
    this.customerService.listAll().pipe(
      catchError((error) => {
        console.error('Erro ao obter a lista de clientes:', error);
        return [];
      })
    ).subscribe((customers) => {
      this.customerList = customers;
    });
  }

  public getAllRooms() {
    this.roomService
    .listAll()
    .subscribe(
      (rooms) => this.roomList = rooms
    )
  }

  public getAllReservations() {
    this.reservationService
    .listAll()
    .subscribe(
      (reservations) => {
        this.reservationList = reservations
      }
    )
  }

  public delete(id: number) {
    switch (this.filterComponent) {
      case "customer":
        this.deleteCustomer(id)
        break;
      case "room":
        this.deleteRoom(id)
        break;
      default:
        this.deleteReservation(id)
        break;
    }
  }

  public deleteReservation(id: number) {
    this.reservationService.deleteById(id)
    .subscribe(
      () => {
        this.getAllReservations()
      }
    )
  }

  public deleteCustomer(id: number) {
    this.customerService.deleteById(id)
    .subscribe(
      () => {
        this.getAllCustomers()
      },
      (error) => {
        console.log(error)
        if (error.status === 409) {
          this.setAlertStatus("error", "Não é possível deletar este cliente pois ele está associado a uma reseva.")
        }
      }
    )
  }

  public deleteRoom(id: number) {
    this.roomService.deleteById(id)
    .subscribe(
      () => {
        this.getAllRooms()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  closeAlert(): void {
    this.alertOpen = false;
  }

  public setAlertStatus(status: string, message: string) {
    this.alertOpen = true
    this.alertStatus = status
    this.alertMessage = message
  }
}
