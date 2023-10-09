import type { Module } from 'vuex';
import { initialUserState, type IRootState, type IUserState } from '../types/stateTypes';

const user: Module<IUserState, IRootState> = {
  state: initialUserState
};

export default user;
