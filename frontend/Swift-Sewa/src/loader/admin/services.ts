import { AdminDashboardService } from "../../scripts/admin/services";

export class AdminDashboardServicePage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/admin/services.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminDashboardService.adminDashboardService();
  };
}
