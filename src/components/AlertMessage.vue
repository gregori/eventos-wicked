<template>
  <div class="flash-messages" v-if="shown">
    <div :class="['alert', alertClass]">
      <div class="container">
        <button type="button" aria-hidden="true" class="close" @click="clear">
          <md-icon>clear</md-icon>
        </button>
        <div class="alert-icon">
          <md-icon>{{alertIcon}}</md-icon>
        </div>
        <span v-html="content">{{content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'alert-message',

  props: {
    classes: {
      type: Object,
      default: () => {
        return {
          'info': 'alert-info',
          'success': 'alert-success',
          'warning': 'alert-warning',
          'error': 'alert-danger',
        };
      }
    },

    icons: {
      type: Object,
      default: () => {
        return {
          'info': 'info_outline',
          'success': 'check',
          'warning': 'warning',
          'error': 'info_outline',
        };
      }
    },
  },

  computed: {
    ...mapGetters('alert', {
      shown: 'shown',
      type: 'type',
      content: 'content',
    }),
    alertClass() {
      return this.classes[this.type];
    },
    alertIcon() {
      return this.icons[this.type];
    },
  },

  methods: {
    ...mapActions('alert', {
      clear: 'clear'
    })
  }
}
</script>

<style lang="scss">
  .flash-messages {
    position: fixed;
    bottom: 0px;
    z-index: 9999;
    width: 100%;
    padding: 15px;
    .alert {
      margin-bottom: 0px;
    }
  }
</style>
