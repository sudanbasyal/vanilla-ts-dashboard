import { instance } from "./base";

export const supplierApi = {
  get: async () => {
    try {
      const response = await instance.get(`/suppliers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },

  post: async (data: any) => {
    try {
      const response = await instance.post(`/suppliers`, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
};
