import { MutationTree } from 'vuex';
import { State, CodeInfo } from './type';

const mutation: MutationTree<State> = {
  CODE_LIST(state: State, payload: any): void {
    state.codeList = payload.resultsList;
  },
};

export default mutation;