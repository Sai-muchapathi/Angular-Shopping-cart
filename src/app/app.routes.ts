import {Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UploadProductComponent} from "./upload-product/upload-product.component";

export const routes: Routes = [
  {path: 'contact',
    loadChildren: () =>
    import('./contact/contact.module').then(m => m.ContactModule)
  },
  {path: 'home', component: HomeComponent},
  {path: 'addProduct',
    loadChildren: () =>
      import('./upload-product/upload-product.module').then(u => u.UploadProductModule)
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-form/user-form.module').then(u => u.UserFormModule)
    // children: [
    //   {path: 'signup', component: UserFormComponent},
    //   {path: 'login', component: UserFormComponent},
    // ]
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];
