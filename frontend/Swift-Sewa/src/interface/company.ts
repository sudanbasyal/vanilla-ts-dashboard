export interface Service {
  id: number;
  name: string;
  description: string;
}

export interface ServiceToCompany {
  id: number;
  price: string;
  description: string;
  deletedAt: null | string;
  service: Service;
}

export interface Company {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  location: string;
  description: string;
  isActive: boolean;
  photo: string;
  openingTime: string;
  closingTime: string;
  panPhoto: string;
  isPending: boolean;
  deletedAt: string | null;
  ServiceToCompany: ServiceToCompany[];
}

export interface CompanyApiResponse {
  companies: {
    ServiceToCompany: ServiceToCompany[];
  };
}
