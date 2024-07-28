import { SelectedCompanyActions } from "../../scripts/supplier/selectedCompany";

export class SelectedCompanyPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/supplier/selectedCompany.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SelectedCompanyActions.selected();
  };
}
