import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

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

  constructor(private fb : FormBuilder) {
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      price: [null, Validators.required],
      image: ['', Validators.required]
    });
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
