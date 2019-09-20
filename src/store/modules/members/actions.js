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
  if(!data.email) return;

  return new Promise((resolve, reject) => {

    // Find user by email
    firestore.collection('users').where('email', '==', data.email)
      .get()
      .then((querySnapshot) => {
        let userDoc = null;
        querySnapshot.forEach((doc) => {
          if (doc.data().teamMemberID === null) {
            userDoc = doc;
          } else {
            // Make sure it's not associate to a different team
            reject(new Error('Usuário já está associado a um time'))
          }
        })

        if (userDoc) {
          // Combine new data with persisted data
          Object.entries(userDoc.data()).forEach(([key, value]) => {
            data[key] = value || data[key];
          });
          // Set new team id
          data.teamMemberID = state.teamID
          delete data.id // Just to ensure to clean id
          firestore.collection('users')
            .doc(userDoc.id)
            .set(data, { merge: true }).then(() => {
              data.id = userDoc.id;
              commit(types.ADD, data)
              resolve(data)
            }).catch((error) => {
              reject(error)
            })
        } else {
          data.teamMemberID = state.teamID
          firestore.collection('users').add(data).then((docRef) => {
            data.id = docRef.id;
            commit(types.ADD, data)
            resolve(data)
          }).catch((error) => {
            reject(error)
          })
        }

      }).catch((error) => {
        reject(error)
      })
  })
};

export const deleteEntry = ({commit, state}, id) => {
  if(!state.teamID) return;

  return new Promise((resolve, reject) => {
    let docRef = firestore.collection('users').doc(id)

    docRef.get().then((doc) => {
      if (doc.exists) {
        // User already signed in. Just remove association
        if (doc.data().uid) {
          docRef.set({ teamMemberID: null }, { merge: true }).then(() => {
            commit(types.DELETE, id);
            resolve()
          }).catch((error) => {
            reject(error)
          })
        } else {
          // User is not associate with auth. So. Just remove.
          docRef.delete().then(() => {
            commit(types.DELETE, id);
            resolve()
          }).catch((error) => {
            reject(error)
          })
        }
      } else {
        // Probaby it never will be called. But going to keep as callback
        commit(types.DELETE, id);
        resolve()
      }
    }).catch((error) => {
      reject(error)
    })
  })
};

export const setTeamID = ({commit}, teamID) => {
  commit(types.SET_TEAM_ID, teamID)
  if(!teamID) return;

  firestore.collection('users').where('teamMemberID', '==', teamID)
    .get()
    .then(function(querySnapshot) {
      var entries = [];
      // console.log('Doc', querySnapshot.length);
      querySnapshot.forEach((doc) => {
        entries.push(Object.assign({ id: doc.id}, doc.data()))
      })
      commit(types.SET_ENTRIES, entries);
    }).catch()
}

export const confirmPayment = ({commit, state}, id) => {
  if(!state.teamID) return;

  let date = {date: Vue.moment().format('YYYY-MM-DD'), state: 'Pago'};

  firestore.collection('users').doc(id).set(
    { actualState: date }, { merge: true }
  ).then(() => {
    commit(types.SET_MEMBER_AS_PAYED, {id: id, date: date })
  }).catch()
}

export const pendentPayment = ({commit, state}, id) => {

  if(!state.teamID && !id) return;

  let date = {date: Vue.moment().format('YYYY-MM-DD'), state: 'Pendente'}

  firestore.collection('users').doc(id).set(
    { actualState: date }, { merge: true }
  ).then(() => {
    commit(types.SET_MEMBER_AS_PAYED, {id: id, date: date })
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
