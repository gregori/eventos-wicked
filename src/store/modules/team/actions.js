/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */

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
  var data = {
    captainUserID: userID,
  }

  firestore.collection('teams').add(data).then((docRef) => {
    commit(types.SET, {
      id: docRef.id,
      data: data,
    })
    store.dispatch('user/setTeamMemberID', docRef.id)
    store.dispatch('robots/setTeamID', docRef.id)
    store.dispatch('members/setTeamID', docRef.id)
  }).catch();
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
