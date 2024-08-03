import { instance } from "./base";

export const roleAuthApi = {
  getMe: async () => {
    try {
      const response = await instance.get(`/auth/me/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
};
