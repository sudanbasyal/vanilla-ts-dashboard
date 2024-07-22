import { AppDataSource } from "../dataSource";
import { Role } from "./../entity/Role";

export const roleRepository = AppDataSource.getRepository(Role);

export class RoleModel {
  static async findByName(name: string) {
    return roleRepository.findOne({ where: { name } });
  }
}
