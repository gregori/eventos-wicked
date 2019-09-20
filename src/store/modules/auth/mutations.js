/* =============================
 * Mutations for the auth module
 * =============================
 *
 * The mutations that are available on the
 * auth module.
 */

import {
  LOGIN,
  LOGOUT,
  SET_PROFILE,
  CLEAR,
} from './mutation-types';

export default {
  [LOGIN](state, payload) {
    state.loggedIn = true;
    state.uid = payload.uid,
    state.profile = {
      email: payload.email,
      displayName: payload.displayName,
      emailVerified: payload.emailVerified,
      photoURL: payload.photoURL,
      matriculaURL: payload.matriculaURL
    };
  },

  [LOGOUT](state) {
    state.loggedIn = false;
    state.uid = null;
    state.profile = {
      email: null,
      displayName: null,
      emailVerified: null,
      photoURL: null,
    }
  },

  [SET_PROFILE](state, data) {
    state.profile = Object.assign(state.profile, data);
  },

  [CLEAR](state) {
    state.loggedIn = false
    state.uid = null
    state.profile = {
      email: null,
      displayName: null,
      emailVerified: null,
      photoURL: null,
      uid: null,
    }
  },
};
