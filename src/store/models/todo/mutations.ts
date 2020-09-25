import { MutationTree } from 'vuex';
import { State, TodoInfo } from './index';

const mutation: MutationTree<State> = {
  removeTodoItem(state: State, payload: any): void {
    state.todoList.map((data, index) => {
      if (data.id === payload.id) {
        state.todoList.splice(index, 1);
      }
    });
  },
  
  addTodoItems(state: State, payload: any): void {
    const inputTitle = payload.inputTitle;
    const inputContent = payload.inputContent;

    const todoInfo: TodoInfo = {
      id: state.todoList[state.todoList.length - 1] === undefined ? 0 : state.todoList[state.todoList.length - 1].id + 1,
      title: inputTitle,
      content: inputContent,
      status: false,
    };

    state.todoList.push(todoInfo);
  },

  checkTodoItem(state: State, payload: any): void {
    state.todoList.map((data) => {
      if (data.id === payload.id) {
        data.status = !data.status;
      }
    });
  },
};

export default mutation;