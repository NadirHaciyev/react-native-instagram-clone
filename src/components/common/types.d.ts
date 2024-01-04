export type User = {
  _id: string;
  full_name: string;
  user_name: string;
  email: string;
  password: string;
  gender: boolean;
  profile_image: string | null;
  followings: string[];
  followers: string[];
  createdAt: string;
  updatedAt: string;
};
