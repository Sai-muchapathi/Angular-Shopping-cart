import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserFormComponent} from "./user-form.component";
import {formDeactivateGuard} from "../guards/auth.guard";

const routes : Routes = [
  {path: 'signup', component: UserFormComponent, canDeactivate: [formDeactivateGuard]},
  {path: 'login', component: UserFormComponent, canDeactivate: [formDeactivateGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class UserFormModule {
}
