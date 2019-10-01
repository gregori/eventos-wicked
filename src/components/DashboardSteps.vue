
<template>
  <div class="md-steppers md-theme-default" :class="{ 'md-horizontal': !isMobile, 'md-vertical': isMobile }">
    <div :class="{'md-steppers-navigation': !isMobile}">
      <dashboard-step
        v-for="(value, key, index) in steps"
        :key="key"
        :namedRoute="key"
        :label="value.label"
        :stepNumber="index"
        :isCurrent="isCurrentStep(key)"
        :isActive="isActiveStep(key)"
        :isDone="isDoneStep(key)"
      >
      </dashboard-step>
    </div>
    <div class="md-steppers-wrapper">
      <div class="md-steppers-container">
        <div class="md-stepper">
          <div class="md-stepper-content md-active">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardStep from '@/components/DashboardStep.vue';

export default {
  name: 'dashboard-steps',

  components: {
    DashboardStep,
  },

  data() {
    return {
      windowWidth: 0,
      steps: {
        'dashboard.index': {
          label: 'Inicio',
          done: true,
        },
        'profile.edit': {
          label: 'Dados Pessoais',
          done: () => {
            return this.userStepDone;
          }
        },
        'team.edit': {
          label: 'Minha Equipe',
          done: () => {
            return this.teamStepDone;
          }
        },
        'member.edit': {
          label: 'Membros da Equipe',
          done: () => {
            return this.membersStepDone;
          }
        },
        'robot.edit': {
          label: 'Meus Robos',
          done: () => {
            return this.robotsStepDone;
          }
        },
        'payment.index': {
          label: 'Financeiro',
          done: () => {
            return this.robotsPaid || this.membersPaid;
          }
        },
      }
    }
  },

  props: {
    currentStep: {
      type: String,
      required: true,
    },
    currentDone: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    ...mapGetters('auth', {
      teamCaptainID: 'teamCaptainID',
      uid: 'uid',
    }),
    ...mapGetters('user', {
      userStepDone: 'stepDone',
    }),
    ...mapGetters('team', {
      teamStepDone: 'stepDone',
    }),
    ...mapGetters('robots', {
      robotsStepDone: 'stepDone',
      robotsPaid: 'anyPaid',
    }),
    ...mapGetters('members', {
      membersStepDone: 'stepDone',
      membersPaid: 'anyPaid',
    }),
    isMobile() {
      return this.windowWidth !== 0 && this.windowWidth < 640;
    },
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },

    isCurrentStep(routeName) {
      return routeName == this.currentStep;
    },

    isDoneStep(key) {
      let step = this.steps[key]
      if(!step) return false
      if(this.currentDone && this.isCurrentStep(key)) return true

      // console.log(key);
      if (typeof step.done === 'function') {
        return step.done.apply(this)
      } else {
        return step.done
      }
    },

    isActiveStep(key) {
      let prevKey = this.prevStep(key);
      return (
        this.isCurrentStep(key) ||
        this.isDoneStep(key) ||
        this.isDoneStep(prevKey)
      )
    },

    nextStep(key) {
      let routes = Object.keys(this.steps);
      let index = routes.indexOf(key) + 1;
      return index < routes.length ? routes[index] : null
    },

    prevStep(key) {
      let routes = Object.keys(this.steps);
      let index = routes.indexOf(key) - 1;
      return index >= 0 ? routes[index] : null
    },
  }
}
</script>

<style lang="scss" scoped>
.md-vertical div {
  overflow-x: auto !important;
  white-space: nowrap !important;

  .md-stepper-header {
    width: auto;
  }
}
.md-steppers {
  width: 100%;


  .md-stepper-header {
    height: 72px;
    margin: 0;
    -webkit-box-flex: 1;
    flex: 1;
    border-radius: 0;
    font-weight: 400;
    text-align: left;
    text-transform: none;
  }

  span.md-stepper-header {
    cursor: default;
  }

  .md-stepper-header .md-ripple {
    background-color: white !important;
    box-shadow: none !important;
  }

  .md-stepper-header.md-button {
    background-color: white !important;
    box-shadow: none !important;
    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
