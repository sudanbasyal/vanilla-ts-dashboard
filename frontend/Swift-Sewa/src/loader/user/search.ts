import { SearchPageActions } from "../../scripts/user/search";

export class UserSearchPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/user/search.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SearchPageActions.searchPage();
  };
}
