import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CharactersHome from '@/views/CharactersHome.vue';
import CharacterDetail from '@/views/CharacterDetail.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/characters',
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersHome,
  },
  {
    path: '/characters/:id',
    name: 'details',
    component: CharacterDetail,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
