/* ============
 * Mutations for the users module
 * ============
 *
 * The mutations that are available on the
 * users module.
 */

import {
  ADD,
  DELETE,
  SET_TEAM_ID,
  SET_ENTRIES,
  SET_MEMBER_AS_PAYED,
  CLEAR,
} from './mutation-types';

export default {
  [ADD](state, entry) {
    state.entries.push(entry)
  },

  [DELETE](state, id) {
    state.entries = state.entries.filter(entry => entry.id !== id)
  },

  [SET_TEAM_ID](state, teamID) {
    state.teamID = teamID;
  },

  [SET_ENTRIES](state, array) {
    state.entries = array;
  },

  [SET_MEMBER_AS_PAYED](state, {id, date}) {
    let newEntries = []
    state.entries.forEach(entry => {
      if (entry.id == id) {
        entry.actualState = date
      }
      newEntries.push(entry)
    })
    state.entries = newEntries
  },

  [CLEAR](state) {
    state.teamID = null
    state.entries = []
  },
};
