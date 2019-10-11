import Vue from 'vue';
import Router from 'vue-router';
import { authGuard } from './auth';

import PrivateBattles from '@/views/PrivateBattles.vue';
import PublicBattles from '@/views/PublicBattles.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PublicBattles',
      component: PublicBattles
    },
    {
      path: '/private-battles',
      name: 'PrivateBattles',
      component: PrivateBattles,
      beforeEnter: authGuard
    }
  ]
});
