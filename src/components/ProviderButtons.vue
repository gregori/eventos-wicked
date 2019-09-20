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

import firebase from '@/plugins/firebase';

export default {
  name: 'provider-buttons',
  methods: {
    authWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .catch(error => {
          console.log(error);
        })
    },
    authWithTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .catch(error => {
          console.log('TwitterAuthProvider', error);        })
    },
    authWithFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .catch(error => {
          console.log('FacebookAuthProvider', error);        })
    },
  },
}
</script>

<style>

</style>
