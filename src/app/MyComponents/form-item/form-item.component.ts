import { Input, Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Form } from 'src/app/Form';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  @Input()
  form: Form = new Form;
  @Input() i:number | undefined;
  @Output() formDelete: EventEmitter<Form> = new EventEmitter();
  @Output() formCheckbox: EventEmitter<Form> = new EventEmitter();
  // @Input() form: Form;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(form : Form){
    this.formDelete.emit(form);
    console.log("onClick has been triggered")
  }
  okBoxClick(form : Form){
    this.formCheckbox.emit(form);
  }

}
