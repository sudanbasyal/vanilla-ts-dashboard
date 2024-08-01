export interface UserProfile {
  address: string;
  id: number;
  name: string;
  phoneNumber: string;
}

export interface User {
  createdAt: string;
  deletedAt: string | null;
  email: string;
  id: number;
  password: string;
  profile: UserProfile;
  updatedAt: string;
}
