/* ============
 * Mutations for the users module
 * ============
 *
 * The mutations that are available on the
 * users module.
 */

import {
  SET,
  SET_TEAM_MEMBER_ID,
  SET_AUTH_UID,
  SET_DATA,
  CLEAR,
} from './mutation-types';

export default {
  [SET](state, {id, data}) {
    state.fetched = true;
    state.id = id;
    state.data = Object.assign(state.data, data);
  },

  [SET_DATA](state, data) {
    state.data = Object.assign(state.data, data);
  },

  [SET_TEAM_MEMBER_ID](state, teamID) {
    state.data.teamMemberID = teamID;
  },

  [SET_AUTH_UID](state, authUid) {
    state.data.uid = authUid;
  },

  [CLEAR](state) {
    state.id = null
    state.fetched = false
    state.data = {
      name: null,
      rg: null,
      cpf: null,
      dateOfBirth: null,
      phone: null,
      teamMemberID: null,
    }
  },
};
