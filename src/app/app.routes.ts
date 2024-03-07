import {Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {UserFormComponent} from "./user-form/user-form.component";

export const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'user', children: [
      {path: 'signup', component: UserFormComponent},
      {path: 'login', component: UserFormComponent},
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];
