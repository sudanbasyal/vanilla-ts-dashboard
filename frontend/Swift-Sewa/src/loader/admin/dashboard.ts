import { AdminDashboardActions } from "../../scripts/admin/dashboard";

export class AdminDashboardPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/admin/dashboard.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminDashboardActions.adminDashboard();
  };
}
