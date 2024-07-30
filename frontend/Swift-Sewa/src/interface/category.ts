export interface Category {
  id: number;
  name: string;
  description: string;
  deletedAt: null | string;
  services: string[];
}
