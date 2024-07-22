import { AppDataSource } from "../dataSource";
import { categoryServicesSeed } from "./categorySeed";
import { rolesPermissionseed } from "./rolesPermisiionsSeed";
import { userRolesSeed } from "./userRolesSeed";

async function main() {
  try {
    await AppDataSource.initialize();
    await rolesPermissionseed();
    await userRolesSeed();
    await categoryServicesSeed();
    console.log("seeding successful ");
  } catch (err) {
    console.log("err", err);
  }
}

main();
