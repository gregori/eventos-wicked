/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';
import firebase from '@/plugins/firebase';
import store from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


router.beforeEach((to, from, next) => {
  // console.log('firebase currentUser: ', firebase.auth().currentUser);
  // console.log('auth.loggedIn: ', store.state.auth.loggedIn);
  store.dispatch('alert/clear');
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.loggedIn) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     * by saving state were user was going
     */

    if (to.path !== '/login') {
      store.dispatch('redirects/set', to.path);
    }

    next({
      name: 'login.index',
    });
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.loggedIn) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next({
      name: 'dashboard.index',
    });
  } else {
    next();
  }
});

Vue.router = router;

export default {
  router,
};
