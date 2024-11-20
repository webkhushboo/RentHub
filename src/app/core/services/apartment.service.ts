import { Injectable } from '@angular/core';
import { Apartment } from '@app/shared/interfaces/apartment.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apartments: Apartment[] = [];

  getApartments(): Observable<Apartment[]> {
    return of(this.apartments);
  }

  addApartment(apartment: Apartment): Observable<Apartment> {
    const newApartment = { ...apartment, id: Date.now().toString(), createdAt: new Date() };
    this.apartments.push(newApartment);
    return of(newApartment);
  }

  getComments(apartmentId: string): Observable<Comment[]> {
    return of([]);
  }

  addComment(comment: Comment): Observable<Comment> {
    return of(comment);
  }
}
