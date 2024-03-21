import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../auth-service.service";

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isLoggedIn) {
    console.log('Success');
    return true;
  } else {
    console.log('failed');
    inject(Router).navigate(['/user/login']).then(r => {});
    return false;
  }
};
