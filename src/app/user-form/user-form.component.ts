import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../guards/auth-service.service";

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

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Accessing route information in the ngOnInit lifecycle hook
    const urlSegments = this.route.snapshot.url;
    if (urlSegments.length > 0) {
      this.buttonClicked = urlSegments[urlSegments.length - 1].path;
    }
  }

  onFormSubmit() {
    console.log('Form submitted');
    if (this.buttonClicked === 'signup') {
      console.log('signup');
      this.submitFormSignup();
    } else if (this.buttonClicked === 'login') {
      console.log('login');
      this.submitFormLogin();
    }
  }

  userData = {
    name: '',
    email: '',
    age: 0,
    role: '',
    password: ''
  };

  submitFormSignup() {
    //this.submitted = true;
    console.log('Signup');
  }

  submitFormLogin() {
    console.log('Credentials submitted');
    if(this.userData) {
      console.log(this.userData);
      this.authService.login(this.userData);
    }
  }
}
