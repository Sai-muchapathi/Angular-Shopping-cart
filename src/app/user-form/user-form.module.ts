import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserFormComponent} from "./user-form.component";

const routes : Routes = [
  {path: 'signup', component: UserFormComponent},
  {path: 'login', component: UserFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class UserFormModule { }
