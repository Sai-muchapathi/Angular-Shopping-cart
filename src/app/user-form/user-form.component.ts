import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../auth-service.service";

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
export class UserFormComponent implements OnInit {
  buttonClicked: string | undefined;
  //submitted: boolean = false;

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Accessing route information in the ngOnInit lifecycle hook
    const urlSegments = this.route.snapshot.url;
    if (urlSegments.length > 0) {
      this.buttonClicked = urlSegments[urlSegments.length - 1].path;
      this.buttonClicked === 'signup' ? this.submitFormSignup() : this.submitFormLogin();
    }
  }

  userData = {
    name: '',
    email: '',
    age: 0,
    password: ''
  };

  submitFormSignup() {
    //this.submitted = true;
  }

  submitFormLogin() {
    console.log('Inside Login');
    if(this.userData.email) {
      this.authService.login();
    }
  }
}
