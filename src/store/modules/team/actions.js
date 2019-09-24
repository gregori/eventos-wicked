/* ============
 * Actions for the users module
 * ============
 *
 * The actions that are available on the
 * users module.
 */

import * as types from './mutation-types';
import store from '@/store';

export const loadById = ({ commit }, teamID) => {
};

export const createEmptyTeam = ({commit}, userID) => {
};

export const updateData = ({commit, state}, data) => {
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
