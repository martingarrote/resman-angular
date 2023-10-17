import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectForm: FormGroup;

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

}
