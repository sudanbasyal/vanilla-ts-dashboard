export interface Service {
  id: string;
  name: string;
  price: string;
}

export interface Category {
  services: Service[];
}
