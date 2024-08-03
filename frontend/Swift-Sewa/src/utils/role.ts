import { roleAuthApi } from "../api/me";

export const verifyUserRole = async (role: string) => {
  const user = await roleAuthApi.getMe();

  if (!user.role.includes(`${role}`)) {
    window.location.href = "/#/login/";
  } else {
    console.log("user");
  }
};
