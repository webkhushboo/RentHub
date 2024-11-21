import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  apartments = [
    {
      title: 'Apartment 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'apartment1'
    },
    {
      title: 'Apartment 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'apartment2'
    },
    {
      title: 'Apartment 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'apartment1'
    }
  ];

  viewDetails(apartment: any) {
    console.log('View details for', apartment);
  }

  markAsFavorite(apartment: any) {
    console.log('Marked as favorite', apartment);
  }
}
