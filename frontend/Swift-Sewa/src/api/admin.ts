import { instance } from "./base";

export const adminApi = {
  deleteUser: async (id: number) => {
    try {
      const response = await instance.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
};
