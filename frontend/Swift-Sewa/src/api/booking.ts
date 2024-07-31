import { Booking } from "../interface/booking";
import { instance } from "./base";

export const bookApi = {
  get: async () => {
    try {
      const response = await instance.get(`/categories/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
  post: async (data: Booking) => {
    try {
      const response = await instance.post(`/bookings/`, data);
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
