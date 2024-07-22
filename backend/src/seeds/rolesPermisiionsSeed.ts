import { Role } from "../entity/Role";
import { Permission } from "../entity/Permission";
import { AppDataSource } from "../dataSource";

const permissionRepo = AppDataSource.getRepository(Permission);
const roleRepo = AppDataSource.getRepository(Role);

export async function rolesPermissionseed() {
  // creating permissions
  const userPostPermission = new Permission();
  userPostPermission.name = "users.post";

  const userDeletePermission = new Permission();
  userDeletePermission.name = "users.delete";

  const userGetPermission = new Permission();
  userGetPermission.name = "users.get";

  const userPutPermission = new Permission();
  userPutPermission.name = "users.put";

  const companyPostPermission = new Permission();
  companyPostPermission.name = "company.post";

  const companyDeletePermission = new Permission();
  companyDeletePermission.name = "company.delete";

  const companyGetPermission = new Permission();
  companyGetPermission.name = "company.get";

  const companyPutPermission = new Permission();
  companyPutPermission.name = "company.put";

  const companyVerifyPermission = new Permission();
  companyVerifyPermission.name = "company.verify";

  await permissionRepo.save([
    userPostPermission,
    userDeletePermission,
    userGetPermission,
    userPutPermission,
    companyPostPermission,
    companyDeletePermission,
    companyGetPermission,
    companyPutPermission,
    companyVerifyPermission,
  ]);

  // creating their relation
  const userRole = new Role();
  userRole.name = "user";
  userRole.permissions = [
    userPostPermission,
    userGetPermission,
    userPutPermission,
    userDeletePermission,
  ];

  const supplierRole = new Role();
  supplierRole.name = "supplier";
  supplierRole.permissions = [
    userPostPermission,
    userGetPermission,
    userPutPermission,
    companyPostPermission,
    companyPutPermission,
    companyDeletePermission,
  ];

  const adminRole = new Role();
  adminRole.name = "admin";
  adminRole.permissions = [
    userPostPermission,
    userDeletePermission,
    userGetPermission,
    userPutPermission,
    companyPostPermission,
    companyDeletePermission,
    companyGetPermission,
    companyPutPermission,
    companyVerifyPermission,
  ];

  await roleRepo.save([userRole, supplierRole, adminRole]);
}
