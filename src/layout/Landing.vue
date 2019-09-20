<template>
  <div class="landing-layout">
    <main-navbar :colorOnScroll="headerColorOnScroll" />
    <div class="page-content">
      <slot />
    </div>
    <main-footer :backgroundColor="footerBackgroundColor" />
  </div>
</template>

<script>
import MainNavbar from '@/layout/MainNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

export default {
  name: 'landingLayout',

  components: {
    MainNavbar,
    MainFooter,
  },

  props: {
    headerColorOnScroll: {
      type: Number,
      default: 100,
    },
    footerBackgroundColor: {
      type: String,
      default: 'black',
    }
  }
}
</script>
