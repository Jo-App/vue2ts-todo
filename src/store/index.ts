import Vue from 'vue';
import Vuex from 'vuex';
import todo from './models/todo/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
  },
});

