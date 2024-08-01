import { Company } from "./company";

export interface SearchResultItem {
  id: number;
  price: string;
  description: string;
  deletedAt: string | null;
  company: Company;
}
