import { instance } from "./base";

export const supplierApi = {
  getAll: async () => {
    try {
      const response = await instance.get(`/suppliers/companies`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },

   getOne:async(id:number)=>{
    try {
      const response = await instance.get(`/suppliers/companies/${id}`);
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
