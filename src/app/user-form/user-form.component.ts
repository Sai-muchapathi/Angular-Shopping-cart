import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userData = {
    name: '',
    email: '',
    age: 0
  };

  submitted = false;

  submitForm() {
    this.submitted = true;
    console.log(this.userData.name);
    console.log(this.userData.email);
    console.log(this.userData.age);
  }
}
