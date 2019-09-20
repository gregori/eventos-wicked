/* ============
 * Mutations for the redirects module
 * ============
 *
 * The mutations that are available on the
 * redirects module.
 */

import { ADD, CLEAR } from './mutation-types';

export default {
  [ADD](state, { type, content }) {
    state.type = type;
    state.content = content;
    state.visible = true;
  },

  [CLEAR](state) {
    state.type = null;
    state.content = null;
    state.visible = false;
  },
};
