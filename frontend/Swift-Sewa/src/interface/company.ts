export interface Company {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  location: string;
  isActive: boolean;
  photo: string;
  openingTime: string;
  closingTime: string;
  panPhoto: string;
  isPending: boolean;
  deletedAt: string | null;
}

export interface CompanyApiResponse {
  companies: Company[];
}
