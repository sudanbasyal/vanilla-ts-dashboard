import { UserProfile } from "./../entity/UserProfile";
import { AppDataSource } from "../dataSource";
import { Role } from "../entity/Role";
import { User } from "../entity/User";

export const userRepository = AppDataSource.getRepository(User);
export const userProfileRepository = AppDataSource.getRepository(UserProfile);

export class UserModel {
  // static async findAll() {
  //   return userRepository.find();
  // }

  // static async findById(id: number) {
  //   return userRepository.findOneBy({ id });
  // }

  static async findByEmail(email: string) {
    return userRepository.findOneBy({ email });
  }

  static async findOne(id: number) {
    return userRepository.findOne({
      where: { id },
      relations: ["roles", "roles.permissions"],
    });
  }
  static async findProfile(id: number) {
    return userRepository.findOne({
      where: { id },
      relations: ["profile"],
    });
  }

  static async create(
    email: string,
    password: string,
    roles: Role,
    name: string,
    address: string,
    phoneNumber: string
  ) {
    const newUser = new User();
    newUser.email = email;
    newUser.password = password;
    newUser.roles = [roles];

    // Initialize the profile
    const newProfile = new UserProfile();
    newProfile.name = name;
    newProfile.address = address;
    newProfile.phoneNumber = phoneNumber;

    // Save the profile first to get an ID
    const savedProfile = await userProfileRepository.save(newProfile);
    newUser.profile = savedProfile;

    await userRepository.save(newUser);
    return newUser;
  }
  static async update(
    userId: number,
    profileId: number,
    newEmail: string,
    newPassword: string,
    newName: string,
    newAddress: string,
    newPhoneNumber: string
  ) {
    await userRepository.update(userId, {
      email: newEmail,
      password: newPassword,
    });

    await userProfileRepository.update(profileId, {
      name: newName,
      address: newAddress,
      phoneNumber: newPhoneNumber,
    });
    return true;
  }
  static async delete(id: number) {
    await userRepository.softDelete(id);
    return true;
  }
}
