import { HomePageActions } from "../scripts/homepage";

export class HomePage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/homepage.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    HomePageActions.homepage();
  };
}
