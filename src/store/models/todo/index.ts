import actions from './actions';
import mutations from './mutations';

export interface todoInfo {
  id: number;
  title: string;
  content: string;
  status: boolean;
}

export interface State {
  todoList: todoInfo[];
  todoInfo: todoInfo;
  selected: string;
}

const state: State = {
  todoList: [
    { 
      id: 1, 
      title: '메뉴 설정',
      content: '내용',
      status: false,
    },
    {
      id: 2,
      title: '메뉴 설정22',
      content: '내용',
      status: false,
    },
    {
      id: 3,
      title: '메뉴 설정33',
      content: '내용33',
      status: false,
    },
  ],
  todoInfo: {
    id: 0,
    title: '',
    content: '',
    status: false,
  },
  selected: '0',
};

export default {
  state,
  actions,
  mutations,
  getters: {

  },
};