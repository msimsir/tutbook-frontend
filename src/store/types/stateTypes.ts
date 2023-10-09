import type { ISignedInUser, Nullable } from '@/types';

export interface IUserState {
  loading: boolean;
  error: Nullable<boolean>;
  signedInUser: Nullable<ISignedInUser>;
}

export const initialUserState = {
  loading: false,
  error: null,
  signedInUser: null
};

export interface IRootState {
  user: IUserState;
}
