import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FetchDataService} from "../fetch-data/fetch-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-upload-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './upload-product.component.html',
  styleUrl: './upload-product.component.css'
})
export class UploadProductComponent implements OnInit {
  myForm: FormGroup = this.fb.group({});
  isSubmitted: boolean = false;
  dropDownData$: Observable<string[]>; // Use Observable

  constructor(private fb: FormBuilder, private fetchDataService: FetchDataService) {
    this.dropDownData$ = this.fetchDataService.getCategories(); // Assign the observable
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      price: [null, Validators.required],
      category: [null, Validators.required],
      image: ['', Validators.required]
    });

    this.fetchDataService.getCategories();
  }


  onSubmit() {
    this.isSubmitted = true;
    // if(!this.myForm.valid) {
    //   if(this.myForm.title == ' ') {
    //     console.log("Title missing");
    //   }
    // }
  }
}
