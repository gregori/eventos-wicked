/* ============
 * Mutations for the redirects module
 * ============
 *
 * The mutations that are available on the
 * redirects module.
 */

import { SET } from './mutation-types';

export default {
  [SET](state, redirectUrl) {
    state.redirectUrl = redirectUrl;
  },
};
