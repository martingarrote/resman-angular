import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/@core/customer.model';
import { CustomerService } from 'src/app/@core/services/customer.service';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {
  public customerList: CustomerModel[] = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService
    .listAll()
    .subscribe(
      (customers) => this.customerList = customers
    )

    
  }

}
