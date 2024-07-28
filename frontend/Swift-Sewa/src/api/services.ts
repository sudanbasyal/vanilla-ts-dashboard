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

  post: async (data: any) => {
    try {
      const response = await instance.post(`/categories/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
};
