import { RoleModel } from "./../model/RoleModel";

export const getRole = async (roleName: string) => {
  const role = await RoleModel.findByName(roleName);
  return role;
};
