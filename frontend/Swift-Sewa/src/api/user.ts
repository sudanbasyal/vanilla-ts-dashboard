import { userForm } from "../interface/form";
import { userProfile } from "../interface/userProfile";
import { instance } from "./base";

export const userApi = {
  get: async () => {
    try {
      const response = await instance.get(`/users/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
  create: async (data: userForm) => {
    try {
      const response = await instance.post("/users", data);
      return response.data;
    } catch (error) {
      console.error("Error creating profile:", error);
      throw error;
    }
  },

  update: async (data: userProfile) => {
    try {
      const response = await instance.put("/users", data);
      return response.data;
    } catch (error) {
      console.error("Error creating profile:", error);
      throw error;
    }
  },
  login: async (data: Pick<userForm, "email" | "password">) => {
    try {
      const response = await instance.post("/auth/login", data);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        console.error("login error message", err.message);
        throw err;
      }
      if (typeof err === "object" && err !== null && "response" in err) {
        const errorResponse = err as {
          response: { data: { message: string } };
        };
        console.log(
          "Error response data message:",
          errorResponse.response.data.message
        );
        throw new Error(errorResponse.response.data.message);
      }
      throw new Error("Unknown error occurred");
    }
  },
};
