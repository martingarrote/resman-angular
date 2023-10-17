import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerSelectComponent } from '../customer-select/customer-select.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectForm: FormGroup;
  public filterComponent = ''

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  public createForm() {
    this.selectForm = this.formBuilder.group({
      value: 'reservation'
    })
  }

  public readForm() {
    const aaaa = this.selectForm.value;
    console.log(aaaa)
  }

  public displayFilterComponent() {
    const expectedComponentType = this.selectForm.value;
    console.log("AAAAAA")
  }

  // precisa definir filtercomponent referente ao que foiselecionado para que ele atraves do ngif mostre o componente desejado

}
