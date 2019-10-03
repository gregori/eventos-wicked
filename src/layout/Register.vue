<template>
  <div class="landing-layout">
    <div class="overlay-wrapper" v-if="isLoading">
      <md-progress-spinner :md-diameter="100" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <md-dialog-confirm
      :md-active="showCaptainDialog"
      md-title="Seja bem vindo ao 1º Summit de Robótica da Católica SC"
      md-content="Você é o capitão da equipe?"
      md-confirm-text="Sim"
      md-cancel-text="Não"
      @md-cancel="onCaptainCancel"
      @md-confirm="onCaptainConfirm" />

    <dashboard-navbar />
    <div class="page-content">
      <slot />
    </div>
    <main-footer :backgroundColor="footerBackgroundColor" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardNavbar from '@/layout/DashboardNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

export default {
  name: 'landingLayout',

  components: {
    DashboardNavbar,
    MainFooter,
  },

  data() {
    return {
      dialogIsCaptain: null,
    }
  },

  computed: {
    ...mapGetters('user', {
      userID: 'id',
      userFetched: 'fetched',
      userData: 'data',
    }),
    ...mapGetters('team', {
      teamFetched: 'fetched',
    }),
    isLoading() {
      return !this.userFetched;
    },
    showCaptainDialog() {
      console.log(this.userData)
      if (!this.userData.person) return false;
      return this.userData.data.person.length > 0 &&
            this.userData.data.person[0].person_type_id == "";
      if(this.dialogIsCaptain !== null) return false;
      return !this.isLoading && this.userFetched && !this.teamFetched
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
    onCaptainCancel() {
      this.dialogIsCaptain = false;
    },

    onCaptainConfirm() {
      this.dialogIsCaptain = true;
      this.$store.dispatch('team/createEmptyTeam', this.userID);
    }
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
