import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from 'src/app/Form';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  'name': string;
  'age': number;
  'occupation': string;
  'company':string;
  'phone': number;
  'city': string;
  'pincode': number;
  @Output() formAdd: EventEmitter<Form> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onSubmitclick(){
    const form = {
      name: this.name,
      age: this.age,
      occupation: this.occupation,
      company: this.company,
      phone: this.phone,
      city: this.city,
      pincode: this.pincode,
      active: true
    }
    this.formAdd.emit(form);

  }

}
