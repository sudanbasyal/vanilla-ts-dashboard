import { AdminDashboardVerifyUsers } from "../../scripts/admin/verifyCompanies";
export class AdminDashboardVerifyCompaniesPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("/src/views/admin/verifyCompanies.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminDashboardVerifyUsers.adminDashboardVerifyUsers();
  };
}
