import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  // {
  //   path: '/events',
  //   name: 'events',
  //   component: () => import('@/views/Events.vue'),
  // },
  // {
  //   path: '/eboard',
  //   name: 'eboard',
  //   component: () => import('@/views/EBoard.vue'),
  // },
  // {
  //   path: '/networking',
  //   name: 'networking',
  //   component: () => import('@/views/Networking.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
