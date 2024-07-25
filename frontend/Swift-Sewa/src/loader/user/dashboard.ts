import { UserDashboardActions } from "../../scripts/user/dashboard";
export class DashboardPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/user/dashboard.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    UserDashboardActions.userDashboard();
  };
}
