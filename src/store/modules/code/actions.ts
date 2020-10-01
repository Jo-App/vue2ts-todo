import contactAPI from '../../../api/ContactsAPI';
import { ActionTree } from 'vuex';
import { State } from './state';

const action: ActionTree<State, any> = {
  async CODE_LIST(store: any, payload: any): Promise<void> {
    const response = await contactAPI.CODE_LIST();
    console.log(response);
    await store.commit('CODE_LIST', { resultsList: response.resultsList, totalcount: response.totalCount });
  },
};

export default action;