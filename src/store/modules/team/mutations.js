/* ============
 * Mutations for the users module
 * ============
 *
 * The mutations that are available on the
 * users module.
 */

import {
  SET,
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

  [CLEAR](state) {
    state.id = null
    state.fetched = false
    state.data = {
      captainUserID: null,
      country: null,
      email: null,
      institution: null,
      name: null,
      slogan: null,
      state: null,
      website: null,
    }
  },
};
