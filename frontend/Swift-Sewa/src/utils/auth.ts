import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../interface/playload";

export const UserDecode = (token: string) => {
  try {
    const decodedToken = jwtDecode<JwtPayload>(token);
    const { id, role } = decodedToken;

    return { role, id };
  } catch (error) {
    console.error("Invalid token:", error);
  }
};
