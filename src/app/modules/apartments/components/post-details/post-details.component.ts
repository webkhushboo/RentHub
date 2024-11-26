import { Component, OnInit } from '@angular/core';
import { Apartment } from '@app/shared/interfaces/apartment.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  apartmentData!: Apartment;

  amenitiesList: { name: string; icon: string }[] = [];
  comments: { user: string; text: string }[] = [];
  newComment: string = '';

  ngOnInit(): void {
    this.loadDummyData(); // Load dummy data
    this.initializeAmenitiesList();
    this.loadComments(); // Load initial comments
  }

  private loadDummyData(): void {
    this.apartmentData = {
      id: '1',
      title: 'Luxury Apartment for Rent',
      description: 'Spacious 2BHK apartment with all modern amenities.',
      price: 30000,
      location: 'Downtown City Center',
      amenities: ['Gym', 'Swimming Pool', 'Car Parking', 'Visitor Parking'],
      isVegetarianPreferred: true,
      isFurnished: true,
      images: [],
      ownerId: '12345',
      createdAt: new Date()
    };
  }

  private initializeAmenitiesList(): void {
    const amenityIcons: Record<string, string> = {
      Gym: 'fitness_center',
      'Swimming Pool': 'pool',
      'Car Parking': 'local_parking',
      'Visitor Parking': 'directions_car'
    };

    this.apartmentData.amenities.forEach((amenity) => {
      this.amenitiesList.push({
        name: amenity,
        icon: amenityIcons[amenity] || 'help'
      });
    });
  }

  private loadComments(): void {
    this.comments = [
      { user: 'Alice', text: 'Great property! Interested in a visit.' },
      { user: 'Bob', text: 'Is the rent negotiable?' }
    ];
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.comments.push({
        user: 'You',
        text: this.newComment.trim()
      });
      this.newComment = '';
    }
  }

  getStatusClass(): string {
    return 'status-available';
  }
}
