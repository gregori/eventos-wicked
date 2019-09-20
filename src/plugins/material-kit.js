import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import '@/assets/scss/material-kit.scss';
import '@/assets/demo.css';
import '@/assets/scss/app.scss';

import globalDirectives from '@/plugins/global-directives';
import globalMixins from '@/plugins/global-mixins';
import globalComponents from '@/plugins/global-components';
import VueLazyload from 'vue-lazyload';
import VueCarousel from 'vue-carousel';

export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
    Vue.use(VueCarousel);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      }
    });
  }
};
