import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TodoList from '../components/TodoList.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'TodoList',
    components: {
      header: Header,
      content: TodoList,
      footer: Footer,
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
