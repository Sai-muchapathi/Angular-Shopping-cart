import {Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UploadProductComponent} from "./upload-product/upload-product.component";
import {authGuard} from "./guards/auth.guard";
import {UserDataComponent} from "./user-data/user-data.component";
import {UserFormModule} from "./user-form/user-form.module";
import {DataResolver} from "./resolve/data-resolver";

export const routes: Routes = [
  {path: 'contact',
    loadChildren: () =>
    import('./contact/contact.module').then(m => m.ContactModule),
    canActivate: [authGuard]
  },
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'addProduct',
    loadChildren: () =>
      import('./upload-product/upload-product.module').then(u => u.UploadProductModule),
    canActivate: [authGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-form/user-form.module').then(u => u.UserFormModule),
  },
  {
    path: 'user/data', component: UserDataComponent, resolve: {userService: DataResolver}
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];
