import { CompanyVerification } from "../../scripts/admin/companyVerification";

export class CompanyVerificationPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/admin/companyVerification.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    CompanyVerification.companyVerification();
  };
}
