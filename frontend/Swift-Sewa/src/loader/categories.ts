import { CategoriesActions } from "../scripts/categories";

export class CategoriesPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/categories.html");

    return response.text();
  };

  static initEventListeners: () => void = () => {
    CategoriesActions.categories();
  };
}
