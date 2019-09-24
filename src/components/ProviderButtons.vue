<template>
  <div>
    <!--
    <md-button @click="authWithFacebook" class="md-just-icon md-simple md-white">
      <i class="fab fa-facebook-square"></i>
    </md-button>
    <md-button @click="authWithTwitter" class="md-just-icon md-simple md-white">
      <i class="fab fa-twitter"></i>
    </md-button>
    -->
    <md-button @click="authWithGoogle" class="md-just-icon md-simple md-white">
      <i class="fab fa-google-plus-g"></i>
    </md-button>
  </div>
</template>

<script>

export default {
  name: 'provider-buttons',
  methods: {
    authWithGoogle() {
    },
    authWithTwitter() {
    },
    authWithFacebook() {
    },
  },
}
</script>

<style>

</style>
