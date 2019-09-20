<template>
  <div class="landing-layout">
    <div class="overlay-wrapper" v-if="isLoading">
      <md-progress-spinner :md-diameter="100" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <mini-course-dashboard-navbar />
    <div class="page-content">
      <slot />
    </div>
    <main-footer :backgroundColor="footerBackgroundColor" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import MiniCourseDashboardNavbar from '@/layout/MiniCourseDashboardNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

export default {
  name: 'landingLayout',

  components: {
    MiniCourseDashboardNavbar,
    MainFooter,
  },

  data() {
    return {

    }
  },

  computed: {
    ...mapGetters('user', {
      userID: 'id',
      userFetched: 'fetched',
    }),
    ...mapGetters('team', {
      teamFetched: 'fetched',
    }),
    isLoading() {
      return !this.userFetched;
    },
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
  },
  methods: {

  },

  mounted() {
    this.$store.dispatch('user/fetch');
  },
}
</script>

<style lang="scss">
  .landing-layout .overlay-wrapper {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999998;

    .overlay-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .md-progress-spinner {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-right: -50px;
      z-index: 999;
    }
  }
</style>
