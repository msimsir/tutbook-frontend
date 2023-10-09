import type { MutationTree } from 'vuex';
import { UserMutationTypes } from '@/store/types/mutationTypes';
import type { IUserState } from '@/store/types/stateTypes';

export const mutations: MutationTree<IUserState> = {
  [UserMutationTypes.Set_Loading](state: IUserState, payload: boolean) {
    state.error = null;
    state.loading = payload;
  },
  [UserMutationTypes.Set_Error](state: IUserState, payload: boolean) {
    state.error = payload;
    state.loading = false;
  },
  [UserMutationTypes.Set_User](state: IUserState, payload: boolean) {
    state.error = payload;
    state.loading = false;
  },
  [UserMutationTypes.Clear_User](state: IUserState) {
    state.signedInUser = null;
    state.error = null;
    state.loading = false;
    localStorage.removeItem('profile');
  }
};
