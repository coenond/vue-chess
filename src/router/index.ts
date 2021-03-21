import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Game from '../views/Game.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
