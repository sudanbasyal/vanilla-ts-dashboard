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
      return response.status;
    } catch (error) {
      console.log(error);
    }
  },
  updateStatus: async (id: number, data: { isApproved: boolean }) => {
    try {
      const response = await instance.put(`/bookings/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
