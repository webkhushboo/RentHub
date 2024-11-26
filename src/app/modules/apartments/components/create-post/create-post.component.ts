import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '@app/shared/interfaces/apartment.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createPostForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  private initializeForm(): void {
    this.createPostForm = this.fb.group({
      building: ['', Validators.required],
      buildingName: ['', Validators.required],
      isShared: [''],
      location: ['', Validators.required],
      squareFeet: ['', [Validators.required]],
      leaseType: [''],
      rent: ['', [Validators.required]],
      isNegotiable: [false],
      priceMode: [''],
      isFurnished: [''],
      gymFitness: [false],
      swimmingPool: [false],
      carPark: [false],
      visitorParking: [false],
      powerBackup: [false],
      garbageDisposal: [false],
      privateLawn: [false],
      waterHeater: [false],
      plantSecurity: [false],
      laundry: [false],
      elevator: [false],
      clubHouse: [false],
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(1400)]]
    });
  }

  onSubmit(): void {
    if (this.createPostForm.valid) {
      const formValue = this.createPostForm.value;
      const amenities = {
        gymFitness: formValue.gymFitness,
        swimmingPool: formValue.swimmingPool,
        carPark: formValue.carPark,
        visitorParking: formValue.visitorParking,
        powerBackup: formValue.powerBackup,
        garbageDisposal: formValue.garbageDisposal,
        privateLawn: formValue.privateLawn,
        waterHeater: formValue.waterHeater,
        plantSecurity: formValue.plantSecurity,
        laundry: formValue.laundry,
        elevator: formValue.elevator,
        clubHouse: formValue.clubHouse
      };

      const createPostFormValue: Post = {
        ...formValue,
        amenities
      };

      console.log('Form submitted:', createPostFormValue);
      this.toastrService.success('Post added successfully !!')
      this.router.navigate(['home'])
    }
  }

  previewListing(): void {
    if (this.createPostForm.valid) {
      console.log('Preview:', this.createPostForm.value);
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.createPostForm.get(controlName)?.hasError(errorName) ?? false;
  }
}
