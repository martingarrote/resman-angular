import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/@core/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  public customerForm: FormGroup;

  public alertOpen:boolean = false;
  public alertStatus: string;
  public alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  
  private createForm() {
    this.customerForm = this.formBuilder.group({
      name: '',
      dateOfBirth: '',
      cpf: '',
      email: ''
    })
  }
  
  public saveCustomer() {
    const customerJSON = this.customerForm.value
    this.customerService.create(customerJSON)
    .subscribe(
      (customer) => {
        this.setAlertStatus("success", "Cliente criado com sucesso!")
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
