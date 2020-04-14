import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/components/Layout',
      routes: [
        { path: '/dynamicForm', component: '@/pages/dynamicForm' },
        { path: '/dynamicFormList', component: '@/pages/dynamicFormList' },
        { path: '/', redirect: '/dynamicForm' },
      ],
    },
  ],
});
