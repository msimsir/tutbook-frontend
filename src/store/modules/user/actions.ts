import type { ActionTree } from 'vuex';
import { signIn, signUp } from '@/api';
import { UserActionTypes } from '@/store/types/actionTypes';
import { UserMutationTypes } from '@/store/types/mutationTypes';
import type { IRootState, IUserState } from '@/store/types/stateTypes';
import type { ISignInUser, ISignUpUser } from '@/types';

export const actions: ActionTree<IUserState, IRootState> = {
  async [UserActionTypes.User_SignIn_Action]({ commit }, payload: ISignInUser) {
    try {
      commit(UserMutationTypes.Set_Loading, true);
      const {
        data: { data }
      } = await signIn(payload);
      commit(UserMutationTypes.Set_User, data);
      commit(UserMutationTypes.Set_Loading, false);
      commit(UserMutationTypes.Set_Error, false);
    } catch (error) {
      commit(UserMutationTypes.Set_Error, error as string);
    }
  },
  async [UserActionTypes.User_SignUp_Action]({ commit }, payload: ISignUpUser) {
    try {
      commit(UserMutationTypes.Set_Loading, true);
      const {
        data: { data }
      } = await signUp(payload);
      commit(UserMutationTypes.Set_User, data);
      commit(UserMutationTypes.Set_Loading, false);
      commit(UserMutationTypes.Set_Error, false);
    } catch (error) {
      commit(UserMutationTypes.Set_Error, error as string);
    }
  }
};
