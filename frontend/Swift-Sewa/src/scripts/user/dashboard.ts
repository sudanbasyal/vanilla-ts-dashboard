import { categoryApi } from "../../api/categories";
import { Category } from "../../interface/category";

export class UserDashboardActions {
  static userDashboard: () => void = async () => {
    const categories: string[] = [];
    const init = async () => {
      try {
        const response = await categoryApi.get();
        console.log("response", response);
        categories.push(...response.map((item: Category) => item.id));
        console.log("categories", categories);
      } catch (err) {
        console.log("err", err);
      }
    };

    await init();

    const dropMenu = document.getElementById("userDropDown");

    const currentYear = document.getElementById("year")!;
    currentYear.textContent = new Date().getFullYear().toString();

    const navbarMenu: HTMLButtonElement =
      document.querySelector(".navbar-burger")!;
    console.log("navebarMenu", navbarMenu);

    const userProfile: HTMLButtonElement = document.getElementById(
      "user-button"
    ) as HTMLButtonElement;

    const selectedLocation = document.getElementById(
      "location"
    ) as HTMLSelectElement;

    const category1 = document.getElementById("category1") as HTMLAnchorElement;

    category1.setAttribute("data-categoryId", categories[0]);
    console.log("categort1", category1);

    const category2 = document.getElementById("category2") as HTMLAnchorElement;

    category2.setAttribute("data-categoryId", categories[1]);

    const category3 = document.getElementById("category3") as HTMLAnchorElement;
    category3.setAttribute("data-categoryId", categories[2]);
    console.log("category3", category3);

    const category4 = document.getElementById("category4") as HTMLAnchorElement;
    category4.setAttribute("data-categoryId", categories[3]);

    category1.onclick = handleCategoryClick;
    category2.onclick = handleCategoryClick;
    category3.onclick = handleCategoryClick;
    category4.onclick = handleCategoryClick;

    selectedLocation.addEventListener("change", function () {
      // Get the selected value
      const selectedValue = selectedLocation.value;
      const location = localStorage.setItem("location", `${selectedValue}`);
    });

    function handleCategoryClick(event: Event) {
      const target = event.currentTarget as HTMLAnchorElement;
      const categoryId = target.getAttribute("data-categoryId");
      window.location.hash = "";
      window.location.hash = "#/lol";
      target.href = `#/categories/:${categoryId}`;
      const location = localStorage.getItem("location");
      console.log("location", location);
    }

    userProfile.onclick = () => {
      let dropdowns = document.querySelector(".dropdown-menu") as any;

      if (dropdowns.classList.contains("hidden")) {
        dropdowns.classList.remove("hidden");
      } else {
        dropdowns.classList.add("hidden");
      }
    };
  };
}
