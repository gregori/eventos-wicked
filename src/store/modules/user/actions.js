/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */

import axios from 'axios'
import * as types from './mutation-types';
import firestore from '@/plugins/firestore';
import firebase from '@/plugins/firebase';
import store from '@/store';

export const fetch = ({ commit }) => {

  var user = firebase.auth().currentUser,
  uid = user.uid,
  usersRef = firestore.collection('users');

  axios.get(process.env.VUE_APP_WICKED_API_HOST + 'people/email?email=' + user.email)
    .then(response => {
      commit(types.SET, {
        id: user.email,
        data: response,
    })
      return response;
    })
    .catch(err => {

    });
};

export const setAuthUid = ({commit, state}, uid) => {
  if (!uid || !state.id) return;

  var docRef = firestore.collection('users').doc(state.id);
  docRef.set({ uid: uid }, { merge: true }).then(() => {
    commit(types.SET_AUTH_UID, teamID)
  }).catch()
}

export const setTeamMemberID = ({commit, state}, teamID) => {
  if(!state.id) return;
  var docRef = firestore.collection('users').doc(state.id);
    docRef.set({ teamMemberID: teamID }, { merge: true }).then(() => {
      commit(types.SET_TEAM_MEMBER_ID, teamID)
    }).catch()
}

export const updateData = ({commit, state}, data) => {
  console.log(data);
  console.log(state.id)
  // if(!state.id) return;
  // return new Promise((resolve) => {
  //   var docRef = firestore.collection('users').doc(state.id);
  //   docRef.set(data, { merge: true }).then(() => {
  //     commit(types.SET_DATA, data);
  //     resolve(state)
  //   }).catch()
  // })
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  fetch,
  setTeamMemberID,
  setAuthUid,
  updateData,
};
