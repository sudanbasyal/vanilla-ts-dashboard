import { AdminDashboardCompanyInfo } from "../../scripts/admin/companyInfo";

export class AdminDashboardCompanyInfoPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/admin/companyInfo.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminDashboardCompanyInfo.adminDashboardCompanyInfo();
  };
}
