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
import store from '@/store';

export const loadById = ({ commit }, teamID) => {
  if (!teamID) return;

  firestore
    .collection('teams')
    .doc(teamID)
    .get()
    .then(function(doc) {
      commit(types.SET, {
        id: doc.id,
        data: doc.data(),
      })
      store.dispatch('robots/setTeamID', doc.id)
      store.dispatch('members/setTeamID', doc.id)
    }).catch();
};

export const createEmptyTeam = ({commit}, userID) => {
  // var data = {
  //   captainUserID: userID,
  // }
  console.log(data)
  // http://localhost/robotic-events/api/v1/team
  var data = {
    "name": ""
  }

  // axios.post(process.env.VUE_APP_WICKED_API_HOST + 'team', data)
  // .then((res) => {
  //   if (res.data.success !== true) {
  //     store.dispatch('alert/error', res.data.message);
  //   }
  // })
  // .catch(err => {
  //   store.dispatch('alert/error', err.data.message);
  // })

  axios.get(process.env.VUE_APP_WICKED_API_HOST + 'people/email?email=' + user.email)
  .then(response => {
    if (response.data.person[0]) {
      // axios.
    }
    // commit(types.SET, {
    //   id: user.email,
    //   data: response,
  // })
    // return response;

  })
  .catch(err => {

  });
};

export const updateData = ({commit, state}, data) => {
  if(!state.id) return;

  return new Promise((resolve) => {
    var docRef = firestore.collection('teams').doc(state.id);
    docRef.set(data, { merge: true }).then(() => {
      commit(types.SET_DATA, data);
      resolve(state)
    }).catch()
  })
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  loadById,
  createEmptyTeam,
  updateData,
};
