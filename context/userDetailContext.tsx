import { createContext, Dispatch, SetStateAction } from "react";

export type UserDetail = {
  _id: string;
  _creationTime?: number;
  paymentId?: string;
  name: string;
  email: string;
  picture: string;
  credits: number;
};

export interface UserDetailContextType {
  userDetail: UserDetail | undefined;
  setUserDetail: Dispatch<SetStateAction<UserDetail | undefined>>;
}

// 👇 context expects this type (not just null)
export const UserDetailContext = createContext<UserDetailContextType | null>(null);
