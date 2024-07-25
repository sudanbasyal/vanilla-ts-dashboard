import { CompanyRegistrationAction } from "./../../scripts/supplier/companyRegistration";

export class CompanyRegistrationPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/supplier/companyRegistration.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    CompanyRegistrationAction.registration();
  };
}
