import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './MyComponents/forms/forms.component';
import { FormItemComponent } from './MyComponents/form-item/form-item.component';
import { AddFormComponent } from './MyComponents/add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './MyComponents/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormItemComponent,
    AddFormComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
