// property-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '@app/shared/interfaces/apartment.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createPostForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  private initializeForm(): void {
    this.createPostForm = this.fb.group({
      building: ['', Validators.required],
      buildingName: ['', Validators.required],
      isShared: ['', Validators.required],
      location: ['', Validators.required],
      squareFeet: ['', [Validators.required, Validators.min(1)]],
      leaseType: ['', Validators.required],
      rent: ['', [Validators.required, Validators.min(1)]],
      isNegotiable: [false],
      priceMode: ['', Validators.required],
      isFurnished: ['', Validators.required],
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

      const propertyListing: Post = {
        ...formValue,
        amenities
      };

      console.log('Form submitted:', propertyListing);
      // Handle form submission - e.g., call a service to save the data
    }
  }

  previewListing(): void {
    if (this.createPostForm.valid) {
      // Handle preview logic
      console.log('Preview:', this.createPostForm.value);
    }
  }

  // Helper method to check form control validation
  hasError(controlName: string, errorName: string): boolean {
    return this.createPostForm.get(controlName)?.hasError(errorName) ?? false;
  }
}