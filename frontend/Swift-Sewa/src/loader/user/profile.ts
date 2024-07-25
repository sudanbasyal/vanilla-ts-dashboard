import { UserProfileActions } from "../../scripts/user/profile";

export class ProfilePage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/user/profile.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    UserProfileActions.userProfile();
  };
}
