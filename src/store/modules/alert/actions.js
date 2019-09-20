/* ============
 * Actions for the redirects module
 * ============
 *
 * The actions that are available on the
 * redirects module.
 */

import * as types from './mutation-types';

export const info = ({ commit }, content) => {
  commit(types.ADD, { type: 'info', content: content });
};

export const success = ({ commit }, content) => {
  commit(types.ADD, { type: 'success', content: content });
};

export const warning = ({ commit }, content) => {
  commit(types.ADD, { type: 'warning', content: content });
};

export const error = ({ commit }, content) => {
  commit(types.ADD, { type: 'error', content: content });
};

export const clear = ({ commit }) => {
  commit(types.CLEAR);
};

export default {
  info,
  success,
  warning,
  error,
  clear,
};
