import { initialUserState, type IRootState, type IUserState } from '@/store/types/stateTypes';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import type { Module } from 'vuex';

const user: Module<IUserState, IRootState> = {
  state: initialUserState,
  mutations,
  actions,
  getters
};

export default user;
