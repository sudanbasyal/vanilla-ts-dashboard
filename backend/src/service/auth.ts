import { Permission } from "./../entity/Permission";
import { User } from "../interface/user";

import * as userService from "../service/user";
import { comparePassword } from "../utils/encrypter";
import { permission } from "process";
import config from "../config";
import { sign } from "jsonwebtoken";
// import { BadRequestError } from "../error/BadRequestError";

interface CustomJwtPayload {
  email: string;
  id: string;
}

export const login = async (body: Pick<User, "email" | "password">) => {
  const existingUser = await userService.getByEmail(body.email);

  if (!existingUser) {
    return null;
  }
  const userPassword = comparePassword(body.password, existingUser.password);
  if (!userPassword) return null;

  const user = await userService.getUser(existingUser.id);
  if (!user) return null;

  const roleName = user.roles.map((role) => role.name);
  const permissions = user.roles.flatMap((role) =>
    role.permissions.map((permission) => permission.name)
  );

  const payload = {
    id: user.id,
    email: existingUser.email,
    role: roleName,
    permissions: permissions,
  };

  const s = config.jwt.secret!;
  const accessToken = sign(payload, s, {
    expiresIn: config.jwt.accessExpiration,
  });

  const refreshToken = sign(payload, s, {
    expiresIn: config.jwt.refreshTokenExpiration,
  });
  return { user, accessToken, refreshToken };
};
