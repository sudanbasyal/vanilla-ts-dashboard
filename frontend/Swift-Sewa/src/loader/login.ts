import { LoginActions } from "../scripts/login";

export class loginPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/login.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    LoginActions.login();
  };
}
