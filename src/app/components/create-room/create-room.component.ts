import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/@core/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  public roomForm: FormGroup;

  public alertOpen:boolean = false;
  public alertStatus: string;
  public alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm() {
    this.roomForm = this.formBuilder.group({
      number: '',
      description: '',
      size: '',
      pricePerMonth: '',
      busy: false,
      active: true
    })
  }

  public saveRoom() {
    const roomJSON = this.roomForm.value
    this.roomService.create(roomJSON)
    .subscribe(
      (room) => {
        this.setAlertStatus("success", "Sala criada com sucesso!")
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
