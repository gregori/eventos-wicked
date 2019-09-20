<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container" v-if="this.userData.miniCourse == null">
          <div class="md-layout">
            <dashboard-steps currentStep="dashboard.index">
              <div class="container" slot="content">
                <div class="md-layout md-gutter md-alignment-center">
                  <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <h1 :model="team">{{ team.name }} </h1>
                  </div>
                </div>
                <div class="md-layout md-gutter md-alignment-left">
                  <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <h2>Sobre a equipe</h2>
                  </div>
                </div>
                <div class="md-layout md-gutter md-alignment-left">
                  <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <h4>Total de integrantes: {{ Object.keys(this.members).length }}</h4>
                    <h4>Total de projetos: {{ Object.keys(this.robots).length }}</h4>
                    <h4>Membros pendentes: {{ countMemberPayed }}</h4>
                    <h4>Robôs pendentes: {{ countRobotNotPayed }}</h4>
                  </div>
                </div>
              </div>
              <md-card-actions>
                <router-link :to="{ name: 'payment.index' }" class="md-button md-primary">
                  <div class="md-ripple">
                    <div class="md-button-content">Gerenciar pagamentos <i class="md-icon md-icon-font md-theme-default">attach_money</i></div>
                  </div>
                </router-link>
              </md-card-actions>
            </dashboard-steps>
          </div>
        </div>
      </div>
    </div>
  </div>
</v-layout>
</template>

<script>
import Vue from 'vue';
import VLayout from '@/layout/Register.vue';
import { mapGetters } from "vuex";
import { Tabs } from "@/components";
import DashboardSteps from '@/components/DashboardSteps.vue'
import store from '@/store';
import firebase from '@/plugins/firebase';
import firestore from '@/plugins/firestore';
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    VLayout,
    DashboardSteps,
  },
  data () {
    return {
      team: {
        name: ''
      },
      form: {
        miniCourse: 'pendent'
      }
    }
  },

  computed: {
    ...mapGetters('auth', {
      teamCaptainID: 'teamCaptainID',
      uid: 'uid',
    }),
    ...mapGetters('robots', {
      robots: 'entries',
    }),
    ...mapGetters('members', {
      members: 'entries',
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
    }),

    countRobotNotPayed() {
      let counter = 0;
      this.robots.forEach(robot => {
        if (robot.actualState === null || robot.actualState.state === "Pendente") counter++;
      });
      return counter;
    },
    countMemberPayed() {
      let counter = 0;
      this.members.forEach(member => {
        if (member.actualState === null || member.actualState.state === "Pendente") counter++;
      });
      return counter;
    },
    storageBaseDir(){
      return `members/${this.teamCaptainID}/profile`
    },
    dataMonitor() {
      this.teamCaptainID;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
  },
  created() {
    // console.log(this.userData)
  },

  methods: {
  },

  mounted() {
    if (this.userData.miniCourse) {
      Vue.router.push({
        name: 'minicourse.dashboard.index',
      });
    }
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  bodyClass: 'dashboard-layout',
};
</script>

<style lang="scss" >
.md-stepper-header {
  width:  3vh !important;
}
</style>
