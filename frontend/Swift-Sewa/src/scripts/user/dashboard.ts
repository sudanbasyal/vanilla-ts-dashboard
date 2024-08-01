import { AxiosError } from "axios";
import { categoryApi } from "../../api/categories";
import { serviceApi } from "../../api/services";
import { Category } from "../../interface/category";

export class UserDashboardActions {
  static userDashboard: () => void = async () => {
    const categories: string[] = [];
    const init = async () => {
      try {
        const categoryResponse = await categoryApi.get();
        console.log("CategoryResponse", categoryResponse);

        const serviceResponse = await serviceApi.get();
        console.log("serviceResponse", serviceResponse);

        categories.push(
          ...categoryResponse.message.map((item: Category) => item.id)
        );
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("Axios error:", err.response?.data.message);
        } else {
          console.log("err", err);
        }
      }
    };

    await init();

    const currentYear = document.getElementById("year")!;
    currentYear.textContent = new Date().getFullYear().toString();

    const userProfile: HTMLButtonElement = document.getElementById(
      "user-button"
    ) as HTMLButtonElement;

    const selectedLocation = document.getElementById(
      "location"
    ) as HTMLSelectElement;

    const category1 = document.getElementById("category1") as HTMLAnchorElement;

    category1.setAttribute("data-categoryId", categories[0]);

    const category2 = document.getElementById("category2") as HTMLAnchorElement;

    category2.setAttribute("data-categoryId", categories[1]);

    const category3 = document.getElementById("category3") as HTMLAnchorElement;
    category3.setAttribute("data-categoryId", categories[2]);

    const category4 = document.getElementById("category4") as HTMLAnchorElement;
    category4.setAttribute("data-categoryId", categories[3]);

    category1.onclick = handleCategoryClick;
    category2.onclick = handleCategoryClick;
    category3.onclick = handleCategoryClick;
    category4.onclick = handleCategoryClick;

    const location = localStorage.getItem("location");
    if (location) {
      selectedLocation.value = location;
    } else {
      selectedLocation.value = "Kathmandu";
    }

    selectedLocation.addEventListener("change", function () {
      // Get the selected value
      const selectedValue = selectedLocation.value;
      const location = localStorage.setItem("location", `${selectedValue}`);
      console.log("selectedValue", selectedValue);
    });

    function handleCategoryClick(event: Event) {
      const target = event.currentTarget as HTMLAnchorElement;
      const categoryId = target.getAttribute("data-categoryId");
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
