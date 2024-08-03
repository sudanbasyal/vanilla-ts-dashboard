import { instance } from "./base";

export const serviceApi = {
  get: async () => {
    try {
      const response = await instance.get(`/services/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw error;
    }
  },

  getSearchedQuery: async (query: string) => {
    const location = localStorage.getItem("location");
    console.log("location", location);
    try {
      const response = await instance.get(
        `services/companies?service=${query}&location=${location}`
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
