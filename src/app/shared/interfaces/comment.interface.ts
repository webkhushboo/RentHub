export interface Comment {
  id?: string;
  apartmentId: string;
  userId: string;
  text: string;
  createdAt: Date;
  userName: string;
}