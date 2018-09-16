import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    }
  ],
  mode: 'history',
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
})
