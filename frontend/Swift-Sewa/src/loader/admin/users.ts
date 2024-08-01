import { AdminDashboardUsers } from "../../scripts/admin/users";

export class AdminDashboardUsersPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/admin/users.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    AdminDashboardUsers.adminDashboardUsers();
  };
}
