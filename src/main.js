/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue'

/* ============
 * Plugins
 * ============
 *
 * Import and materiali-kit and plugins.
 */
import './plugins/vuex';
import store from './store';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuelidate';
import './plugins/material-kit';
import './plugins/moment';
// import './plugins/async-computed'; @TODO Remove from packages too
import MaterialKit from '@/plugins/material-kit';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from './App'

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /**
   * The localization plugin.
   */
  i18n,
  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
});
