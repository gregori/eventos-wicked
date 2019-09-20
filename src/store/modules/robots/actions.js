/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */
import Vue from 'vue'
import * as types from './mutation-types';
import firestore from '@/plugins/firestore';
// import store from '@/store';

export const addEntry = ({commit, state}, data) => {
  if(!state.teamID) return;
  data.teamID = state.teamID;

  return new Promise((resolve) => {
    firestore.collection('robots').add(data).then((docRef) => {
      data.id = docRef.id;
      commit(types.ADD, data)
      resolve(data)
    }).catch();
  })
};

export const deleteEntry = ({commit, state}, id) => {
  if(!state.teamID) return;

  return new Promise((resolve) => {
    firestore.collection('robots').doc(id).delete().then(() => {
      commit(types.DELETE, id);
      resolve()
    }).catch()
  })
};

export const setTeamID = ({commit}, teamID) => {
  commit(types.SET_TEAM_ID, teamID)
  if(!teamID) return;

  firestore.collection('robots').where('teamID', '==', teamID)
    .get()
    .then(function(querySnapshot) {
      var entries = [];
      querySnapshot.forEach((doc) => {
        entries.push(Object.assign({ id: doc.id}, doc.data()))
      })
      commit(types.SET_ENTRIES, entries);
    }).catch()
}

export const confirmPayment = ({commit, state}, id) => {
  if(!state.teamID) return;

  let date = {date: Vue.moment().format('YYYY-MM-DD'), state: 'Pago'};

  firestore.collection('robots').doc(id).set(
    { actualState: date }, { merge: true }
  ).then(() => {
    commit(types.SET_MEMBER_AS_PAYED, { id: id, date: date })
  }).catch()
}

export const pendentPayment = ({commit, state}, id) => {
  if(!state.teamID) return;

  let date = {date: Vue.moment().format('YYYY-MM-DD'), state: 'Pendente'};

  firestore.collection('robots').doc(id).set(
    { actualState: date }, { merge: true }
  ).then(() => {
    commit(types.SET_MEMBER_AS_PAYED, { id: id, date: date })
  }).catch()
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  confirmPayment,
  pendentPayment,
  addEntry,
  deleteEntry,
  setTeamID,
};
