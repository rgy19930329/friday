import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HelloWorld from './components/HelloWorld.vue';
import T1 from './components/T1.vue';
import T2 from './components/T2.vue';

export default new Router({
  routes: [
    { // index
      name: 'index',
      path: '/',
      component: HelloWorld
    },
    { // t1
      name: 't1',
      path: '/t1',
      component: T1
    },
    { // t2
      name: 't2',
      path: '/t2',
      component: T2
    }
  ]
});
