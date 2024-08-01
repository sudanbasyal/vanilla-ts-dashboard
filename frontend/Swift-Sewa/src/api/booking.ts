import { BookingForm } from "../interface/booking";
import { instance } from "./base";

export const bookApi = {
  get: async () => {
    try {
      const response = await instance.get(`/bookings/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
  post: async (data: BookingForm) => {
    try {
      const response = await instance.post(`/bookings/`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
