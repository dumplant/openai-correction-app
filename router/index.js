import Vue from 'vue';
import VueRouter from 'vue-router';
import TheMain from '@/views/TheMain.vue';
import MyHome from '@/views/MyHome.vue';
import MyCollections from '@/views/MyCollections.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TheMain,
    children: [
      { path: '', component: MyHome },
      { path: '/home', component: MyHome },
      { path: '/collections', component: MyCollections },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
