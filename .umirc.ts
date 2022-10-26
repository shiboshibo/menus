import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/nav',
    },
    {
      name: '首页',
      path: '/nav',
      component: './Nav',
    },
  ],
  npmClient: 'cnpm',
});

