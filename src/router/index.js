import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import UserDetails from '../pages/UserDetails.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/userdetails', component: UserDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})


// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('user-token');
  
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});



export default router
