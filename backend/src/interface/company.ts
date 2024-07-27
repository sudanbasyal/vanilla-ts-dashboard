export interface companyData {
  name: string;
  phoneNumber: string;
  address: string;
  location: string;
  userId: string;
  categoryId: string;
  photo: { [key: string]: Express.Multer.File[] };
  panPhoto: { [key: string]: Express.Multer.File[] };
  price: string[];
  aviliableDays: string;
  openingTime: string;
  closingTime: string;
  description: string;
  serviceIds: string[];
  isActive: boolean;
}
