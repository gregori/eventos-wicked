<template>
  <div class="landing-layout">
    <mini-course-navbar :colorOnScroll="headerColorOnScroll" />
    <div class="page-content">
      <slot />
    </div>
    <main-footer :backgroundColor="footerBackgroundColor" />
  </div>
</template>

<script>
import MiniCourseNavbar from '@/layout/MiniCourseNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

export default {
  name: 'landingLayout',

  components: {
    MiniCourseNavbar,
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
