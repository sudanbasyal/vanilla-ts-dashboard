import { AdminPendingCompanies } from "../../scripts/admin/pendingComapnies";
export class PendingCompaniesPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("/src/views/admin/pendingCompanies.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminPendingCompanies.pendingCompanies();
  };
}
