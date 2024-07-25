import { categoryApi } from "../../api/categories";
export class CompanyRegistrationAction {
  static registration: () => void = async () => {
    async function fetchCategoriesServices() {
      try {
        const data = categoryApi.get();
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
      }
    }

    fetchCategoriesServices();
  };
}
