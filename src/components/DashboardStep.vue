<template>
  <span
    class="md-button md-stepper-header md-theme-default"
    :class="stepperClasses"
    >
    <router-link v-if="isActive" tag="a" :to="{ name: namedRoute }">
      <div class="md-ripple">
        <div class="md-button-content">
          <div class="md-stepper-number" :class="{'is-loading': isLoading}">
            <md-icon v-if="isDone">done</md-icon>
            <span v-else>{{stepNumber}}</span>
          </div>
          <div class="md-stepper-text">
            <span class="md-stepper-label">
              {{label}}
            </span>
          </div>
        </div>
      </div>
    </router-link>
    <div class="md-ripple" v-else>
      <div class="md-button-content">
        <div class="md-stepper-number" :class="{'is-loading': isLoading}">
          <md-icon v-if="isDone">done</md-icon>
          <span v-else>{{stepNumber}}</span>
        </div>
        <div class="md-stepper-text">
          <span class="md-stepper-label">
            {{label}}
          </span>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'dashboard-step',
  props: {
    namedRoute: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    stepNumber: {
      type: Number,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isLoading() {
      return this.isDone === null
    },
    stepperClasses() {
      return {
        'md-current': this.isCurrent,
        'md-active': this.isActive,
        'md-done': this.isDone,
        'md-loading': this.isLoading,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-done .md-stepper-number {
    background-color: #00c853 !important;
  }
  .md-current .md-stepper-text {
    font-weight: bold;
  }
  .md-loading .md-stepper-number {
    background-color: #aaa !important;
  }
</style>
