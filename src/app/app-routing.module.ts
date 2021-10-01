import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './MyComponents/data/data.component';
import { FormsComponent } from './MyComponents/forms/forms.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
