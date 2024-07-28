import { CompaniesActions } from "../../scripts/supplier/companies";

export class CompaniesPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/supplier/companies.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    CompaniesActions.companies();
  };
}
