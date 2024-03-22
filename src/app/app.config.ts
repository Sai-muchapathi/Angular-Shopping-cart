import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {AuthService} from "./guards/auth-service.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), AuthService]
};
