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


  getSpecific: async (data: [{ name: string; location: string }]) => {
    try {
      const response = await instance.get(`/categories/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },


};
