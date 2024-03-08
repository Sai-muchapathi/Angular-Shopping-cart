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

  // Use Observable
  dropDownData$: Observable<string[]>;

  // call the observable class
  constructor(private fb: FormBuilder, private fetchDataService: FetchDataService) {
    // Assign the observable
    this.dropDownData$ = this.fetchDataService.getCategories();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      price: [null, Validators.required],
      category: [null, Validators.required],
      image: ['', Validators.required]
    });

    // fetching only the categories
    this.fetchDataService.getCategories();
  }


  onSubmit() {
    this.isSubmitted = true;
  }
}
