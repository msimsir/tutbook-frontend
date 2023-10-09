import type { GetterTree } from 'vuex';
import { UserGetterTypes } from '@/store/types/getterTypes';
import type { IRootState, IUserState } from '@/store/types/stateTypes';

export const getters: GetterTree<IUserState, IRootState> = {
  [UserGetterTypes.Get_Signed_In_User](state: IUserState) {
    return state.signedInUser;
  }
};
