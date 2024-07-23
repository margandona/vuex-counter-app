// tests/unit/router.spec.js
import { createRouter, createWebHistory } from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

describe('Router', () => {
  it('should contain Home route', () => {
    const route = router.resolve('/');
    expect(route.name).toBe('Home');
  });

  it('should contain About route', () => {
    const route = router.resolve('/about');
    expect(route.name).toBe('About');
  });
});
