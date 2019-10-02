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
      console.log(response)
      commit(types.SET, {
        id: 'doc.id',
        data: response,
    })
      return response;
    })
    .catch(err => {

    });

      // Try to search for the user by auth uid
      usersRef.where('uid', '==', uid)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function(doc) {
            commit(types.SET, {
              id: doc.id,
              data: doc.data(),
          })
          let teamID = doc.data().teamMemberID;
          if (teamID) store.dispatch('team/loadById', teamID);
        });
      } else {
        let email = user.email;
        // Try to search for user by email(Yes firestore does not support OR accross multiple fields)
        usersRef.where('email', '==', email).where('uid', '==', null)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach(function(doc) {
              commit(types.SET, {
                  id: doc.id,
                  data: doc.data(),
                })
                store.dispatch('user/setAuthUid', uid)
                let teamID = doc.data().teamMemberID;
                if (teamID) store.dispatch('team/loadById', teamID);
              });
            } else {
              // Otherwise.. Create new user
              let data = {
                uid: uid,
                email: user.email,
                name: user.displayName,
                teamMemberID: null,
              }
              usersRef.add(data).then((docRef) => {
                commit(types.SET, {
                  id: docRef.id,
                  data: data,
                })
              }).catch();
            }
          }).catch();
      }
    }).catch();
};

export const setAuthUid = ({commit, state}, uid) => {
  if (!uid || !state.id) return;

  var docRef = firestore.collection('users').doc(state.id);
  docRef.set({ uid: uid }, { merge: true }).then(() => {
    commit(types.SET_AUTH_UID, teamID)
  }).catch()
}

export const setTeamMemberID = ({commit, state}, teamID) => {
  console.log('here')
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
