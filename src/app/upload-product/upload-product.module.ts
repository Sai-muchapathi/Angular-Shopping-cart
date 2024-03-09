import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UploadProductComponent} from "./upload-product.component";


const routes: Routes = [{path: '', component: UploadProductComponent}];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class UploadProductModule { }
