import { SupplierDashboardActions } from "../../scripts/supplier/dashboard";

export class SupplierDashboardPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/supplier/dashboard.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SupplierDashboardActions.supplierDashboard();
  };
}
