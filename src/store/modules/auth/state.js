/* ========================
 * State of the auth module
 * ========================
 *
 * The initial state of the user module.
 */

export default {
  loggedIn: false,
  uid: null,
  profile: {
    email: null,
    displayName: null,
    emailVerified: null,
    photoURL: null,
    uid: null,
    matriculaURL: null
  },
};
