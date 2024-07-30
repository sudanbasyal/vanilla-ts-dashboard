import { categoryApi } from "../api/categories";

export class CategoriesActions {
  static categories: () => void = () => {
    console.log("helo");
    const id = window.location.hash.split(":")[1];
    console.log(id);
    const init = async () => {
      try {
        let location = localStorage.getItem("location");
        location === undefined ? "Kathmandu" : location;
        const body = {
          location,
          categoryId: id,
        };

        const response = await categoryApi.get();
        console.log("body", body);
      } catch (err) {
        console.log("err", err);
      }
    };

    init();
  };
}
