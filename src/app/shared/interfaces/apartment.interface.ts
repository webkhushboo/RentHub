export interface Apartment {
  id?: string;
  title: string;
  description: string;
  price: number;
  location: string;
  amenities: string[];
  isVegetarianPreferred: boolean;
  isFurnished: boolean;
  images: string[];
  ownerId: string;
  createdAt: Date;
}


export interface Post {
  building: string;
  buildingName: string;
  isShared: 'yes' | 'no';
  location: string;
  squareFeet: number;
  leaseType: 'longTerm' | 'shortTerm' | 'both';
  rent: number;
  isNegotiable: boolean;
  priceMode: 'perMonth' | 'utilitiesIncluded';
  isFurnished: 'yes' | 'no';
  amenities: {
    gymFitness: boolean;
    swimmingPool: boolean;
    carPark: boolean;
    visitorParking: boolean;
    powerBackup: boolean;
    garbageDisposal: boolean;
    privateLawn: boolean;
    waterHeater: boolean;
    plantSecurity: boolean;
    laundry: boolean;
    elevator: boolean;
    clubHouse: boolean;
  };
  title: string;
  description: string;
}