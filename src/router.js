import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HelloWorld from './components/HelloWorld.vue';
import T1 from './components/T1.vue';
import T2 from './components/T2.vue';
import T3 from './components/T3.vue';
import Friday from './components/Friday.vue';
import MFriday from './components/MFriday.vue';

export default new Router({
  routes: [
    { 
      name: 'index',
      path: '/',
      component: HelloWorld
    },
    { 
      name: 't1',
      path: '/t1',
      component: T1
    },
    {
      name: 't2',
      path: '/t2',
      component: T2
    },
    {
      name: 't3',
      path: '/t3',
      component: T3
    },
    {
      name: 'friday',
      path: '/friday',
      component: Friday
    },
    {
      name: 'mfriday',
      path: '/mfriday',
      component: MFriday
    }
  ]
});
