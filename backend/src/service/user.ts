// import { User } from "../entity/User";
// import { comparePassword, hashPassword } from "../utils/encrypter";
// import * as roleService from "./role";
// import { AppDataSource } from "../dataSource";
// import { UserProfile } from "../entity/UserProfile";
// import { Role } from "../entity/Role";

// export const userRepository = AppDataSource.getRepository(User);
// export const userProfileRepository = AppDataSource.getRepository(UserProfile);

// export const findAll = () => {
//   return userRepository.find();
// };

// export const findById = async (id: number) => {
//   return userRepository.findOneBy({ id });
// };

// export const create = async (
//   email: string,
//   password: string,
//   roles: Role,
//   name: string,
//   address: string,
//   phoneNumber: string
// ) => {
//   const newUser = new User();
//   newUser.email = email;
//   newUser.password = password;
//   newUser.roles = [roles];

//   // Initialize the profile
//   const newProfile = new UserProfile();
//   newProfile.name = name;
//   newProfile.address = address;
//   newProfile.phoneNumber = phoneNumber;

//   // Save the profile first to get an ID
//   const savedProfile = await userProfileRepository.save(newProfile);
//   newUser.profile = savedProfile;

//   await userRepository.save(newUser);
//   return newUser;
// };

// export const update = async (
//   userId: number,
//   profileId: number,
//   newEmail: string,
//   newPassword: string,
//   newName: string,
//   newAddress: string,
//   newPhoneNumber: string
// ) => {
//   await userRepository.update(userId, {
//     email: newEmail,
//     password: newPassword,
//   });

//   await userProfileRepository.update(profileId, {
//     name: newName,
//     address: newAddress,
//     phoneNumber: newPhoneNumber,
//   });
//   return true;
// };

// export const deleteById = async (id: number) => {
//   await userRepository.softDelete(id);
//   return true;
// };

// export const findByEmail = async (email: string) => {
//   return userRepository.findOneBy({ email });
// };

// export const findOne = async (id: number) => {
//   return userRepository.findOne({
//     where: { id },
//     relations: ["roles", "roles.permissions"],
//   });
// };

// export const findProfile = async (id: number) => {
//   return userRepository.findOne({
//     where: { id },
//     relations: ["profile"],
//   });
// };

// export const getByEmail = async (email: string) => {
//   const user = await findByEmail(email);
//   if (!user) return null;
//   return user;
// };

// export const getUser = async (id: number) => {
//   const user = await findOne(id);
//   return user;
// };

// export const getUserProfile = async (id: number) => {
//   const user = await findProfile(id);
//   return user;
// };

// export const createUser = async (
//   email: string,
//   password: string,
//   role: string,
//   name: string,
//   address: string,
//   phoneNumber: string
// ) => {
//   const existingUser = await findByEmail(email);
//   if (existingUser) return null;
//   const newPassword = await hashPassword(password);
//   const roleExists = await roleService.getRole(role);
//   if (!roleExists) return null;

//   const newUser = await create(
//     email,
//     newPassword,
//     roleExists,
//     name,
//     address,
//     phoneNumber
//   );
//   return newUser;
// };

// export const updateUserProfile = async (
//   id: number,
//   email: string,
//   password: string | null,
//   name: string,
//   address: string,
//   phoneNumber: string
// ) => {
//   const user = await findProfile(id);
//   if (!user) return null;

//   // Check if email is already used by another user
//   const existingUser = await findByEmail(email);
//   if (existingUser && existingUser.id !== id) {
//     //TODO fix the eroors type properly only 1 type is getting returned
//     throw new Error("Email already in use");
//   }

//   // Update user fields
//   const newEmail = email;
//   let newPassword: string;
//   const newName = name;
//   const newAddress = address;
//   const newPhoneNumber = phoneNumber;

//   if (password) {
//     const isPasswordDifferent = !(await comparePassword(
//       password,
//       user.password
//     ));
//     if (isPasswordDifferent) {
//       newPassword = await hashPassword(password);
//     }
//   }

//   // Update profile fields
//   newPassword = user.password;
//   const profileId = user.profile.id;

//   const updatedUser = await update(
//     id,
//     profileId,
//     newEmail,
//     newPassword,
//     newName,
//     newAddress,
//     newPhoneNumber
//   );
//   if (!updatedUser) return null;

//   return updatedUser;
// };

// export const deleteUser = async (id: number) => {
//   const userExists = await findById(id);
//   if (!userExists) return null;
//   const deletedUser = await deleteById(id);
//   return deletedUser;
// };
