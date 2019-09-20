/* ============
 * Actions for the redirects module
 * ============
 *
 * The actions that are available on the
 * redirects module.
 */

import * as types from './mutation-types';

export const set = ({ commit }, url) => {
  console.log('Set redirect to ', url)
  commit(types.SET, url);
};

export default {
  set,
};
