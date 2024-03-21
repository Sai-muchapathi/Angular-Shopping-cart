import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth-service.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin) {
    console.log('Admin: All URLs accessible');
    return true;
  }
  if (authService.isAuthorised) {
    // Normal user: Check allowed URLs
    const allowedUrls = ['/home', '/contact']; // Define URLs accessible to normal users

    if (allowedUrls.includes(state.url)) {
      console.log('Normal user: Allowed URL');
      return true;
    } else {
      console.log('Normal user: Restricted URL');
      router.navigate(['/user/login']).then(r => {});
      return false;
    }
  }
  else {
    console.log("Not authorised to access this page!!!");
    router.navigate(['/user/login']).then();
    return false;
  }
};
