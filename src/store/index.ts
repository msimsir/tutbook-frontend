import { createStore } from 'vuex';
import type { IRootState } from './types/stateTypes';
import user from './modules/user';

export default createStore<IRootState>({
  modules: {
    user
  }
});
