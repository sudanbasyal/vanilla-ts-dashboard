import { instance } from "./base";

export const categoryApi = {
  get: async () => {
    try {
      const response = await instance.get(`/categories/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
  getOne: async (id: number) => {
    try {
      const response = await instance.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCompanyByCategory: async (data: { id: string; location: string }) => {
    try {
      const response = await instance.get(
        `/categories/${data.id}/companies?location=${data.location}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
