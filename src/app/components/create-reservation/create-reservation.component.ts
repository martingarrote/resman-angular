import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerModel } from 'src/app/@core/customer.model';
import { RoomModel } from 'src/app/@core/room.model';
import { CustomerService } from 'src/app/@core/services/customer.service';
import { ReservationService } from 'src/app/@core/services/reservation.service';
import { RoomService } from 'src/app/@core/services/room.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
  public reservationForm: FormGroup;
  public customerList: CustomerModel[]
  public roomList: RoomModel[]

  public alertOpen:boolean = false;
  public alertStatus: string;
  public alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private roomService: RoomService,
    private reservationService: ReservationService
    ) { }

  ngOnInit(): void {
    this.createForm()
    this.getCustomers()
    this.getNotBusyRooms()
  }

  private createForm() {
    this.reservationForm = this.formBuilder.group({
      code: '',
      customer: '',
      reservedRoom: '',
      reservationPrice: '',
      description: '',
      duration: '',
      startDate: '',
      endDate: '',
      active: true
    })
  }

  public getCustomers() {
    this.customerService
    .listAll()
    .subscribe(
      (customers) => this.customerList = customers
    )
  }

  public getNotBusyRooms() {
    this.roomService
    .findByBusy(false)
    .subscribe(
      (rooms) => this.roomList = rooms
    )
  }

  public saveReservation() {
    const reservationJSON = this.reservationForm.value
    this.reservationService.create(reservationJSON)
    .subscribe(
      (reservation) => {
        this.setAlertStatus("success", "Reserva criada com sucesso!")
        this.createForm()
      },
      (error) => {
        this.setAlertStatus("error", "Algo deu errado, verifique os campos e tente novamente.")
      }
    )
  }

  public closeAlert(): void {
    this.alertOpen = false;
  }

  public setAlertStatus(status: string, message: string) {
    this.alertOpen = true
    this.alertStatus = status
    this.alertMessage = message
  }
}
