
/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import Vue from 'vue';
import store from '@/store'
import * as types from './mutation-types'

export const updateProfile = ({commit, state}, data) => {

}


export const login = ({commit}, user_payload) => {
}

export const logout = ({commit}) => {
}

export const signOut = () => {
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  signOut,
  login,
  logout,
  updateProfile,
};
