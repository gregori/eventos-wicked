/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */
import Vue from 'vue'
import * as types from './mutation-types';
// import store from '@/store';

export const addEntry = ({commit, state}, data) => {
};

export const deleteEntry = ({commit, state}, id) => {
};

export const setTeamID = ({commit}, teamID) => {
}

export const confirmPayment = ({commit, state}, id) => {
}

export const pendentPayment = ({commit, state}, id) => {
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
