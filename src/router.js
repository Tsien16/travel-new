import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/city',
      name: 'city',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "list" */ './views/city/City.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/detail/Detail.vue'),
    },
  ],
});
