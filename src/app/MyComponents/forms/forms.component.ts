import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Form } from "../../Form";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forms: Form[];
  localItem: string|null;
  constructor() {
    this.localItem = localStorage.getItem("forms");
    if(this.localItem == null) {
      this.forms = [];
      }
      else {
      this.forms = JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }

  addForm(form:Form){
    console.log("Add Form is ", form);
    this.forms.push(form);
    localStorage.setItem("forms", JSON.stringify(this.forms));
  }

  deleteForm(form:Form){
    console.log("Delete Form is ", form);
    const index = this.forms.indexOf(form);
    this.forms.splice(index, 1);
    localStorage.setItem("forms", JSON.stringify(this.forms));
  }

  toggleform(form:Form){
    console.log("Check Form is ", form);
    const index = this.forms.indexOf(form);
    this.forms[index].active = !this.forms[index].active
    localStorage.setItem("forms", JSON.stringify(this.forms));
  }

}
