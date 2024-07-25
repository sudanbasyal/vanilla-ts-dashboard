import { SignupActions } from "../scripts/signup";
export class SignUpPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/signUp.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SignupActions.signUp();
  };
}
