
/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import Vue from 'vue';
import firebase from '@/plugins/firebase'
import firestore from '@/plugins/firestore';
import store from '@/store'
import * as types from './mutation-types'

export const updateProfile = ({commit, state}, data) => {
  var user = firebase.auth().currentUser;
  if(!user) return;

  return new Promise((resolve) => {
    user.updateProfile(data).then(() => {
      commit(types.SET_PROFILE, data);
      resolve(state)
    }).catch()
  })
}


export const login = ({commit}, user_payload) => {
  console.log('Received call to the auth login action!')
  commit(types.LOGIN, user_payload);

  // store.dispatch('auth/fetchTeamIDs', user_payload.uid)

  let currentRoute = Vue.router.history.current;

  let usersRef = firestore.collection('users');

  /**
   * This is not the best way to do this, but is working for now
   * @FIXME: Made this on the right way
   */
  usersRef.where('uid', '==', user_payload.uid).get()
    .then(function(snapshot) {
      snapshot.forEach(function(doc) {
        let data = doc.data();
        if (data.miniCourse) {
          Vue.router.push({
            name: 'minicourse.dashboard.index',
          });
        } else {
          if (store.state.redirects.redirectUrl) {
            Vue.router.push({
              path: store.state.redirects.redirectUrl,
            });
          } else if (currentRoute && currentRoute.meta.guest) {
            Vue.router.push({
              name: 'dashboard.index',
            });
          }
        }
      })
    });
}

export const logout = ({commit}) => {
  console.log('Received call to the auth logout action!')
  commit(types.LOGOUT);
  store.dispatch('members/clear')
  store.dispatch('robots/clear')
  store.dispatch('team/clear')
  store.dispatch('user/clear')
  let currentRoute = Vue.router.history.current;
  if (currentRoute && currentRoute.meta && (currentRoute.meta.auth || currentRoute.meta.guest)) {
    Vue.router.replace({
      name: 'login.index',
    })
  }
}

export const signOut = () => {
  try {
    firebase.auth().signOut();
  } catch(error) {
    logout();
    console.log(error);
  }
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  signOut,
  login,
  logout,
  updateProfile,
};
