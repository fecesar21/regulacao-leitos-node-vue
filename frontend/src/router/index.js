import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import store from '../store';

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/home', name: 'home', component: HomeView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
