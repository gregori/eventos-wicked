/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */

import * as types from './mutation-types';
import store from '@/store';

export const fetch = ({ commit }) => {

};

export const setAuthUid = ({commit, state}, uid) => {
}

export const setTeamMemberID = ({commit, state}, teamID) => {
}

export const updateData = ({commit, state}, data) => {
  // console.log(data);
  // console.log(state.id)
}

export const clear = ({commit}) => {
  commit(types.CLEAR);
}

export default {
  clear,
  fetch,
  setTeamMemberID,
  setAuthUid,
  updateData,
};
