/* ===========================
 * Getters for the auth module
 * ===========================
 *
 * The getters that are available on the
 * user module.
 */

export default {
  loggedIn: ({loggedIn}) => loggedIn,
  profile: ({profile}) => profile,
  profileEmail: ({profile}) => {
    return profile.email;
  },
  profileImage: ({profile}) => {
    return profile.photoURL;
  },
  profileDisplayName: ({profile}) => {
    if(profile.displayName) return profile.displayName;
    if(profile.email) return profile.email.split('@')[0];
  },
  storageBaseDir: ({uid}) => {
    return `users/${uid}`
  },
  // teamMemberID: ({teamMemberID}) => teamMemberID,
  teamCaptainID: ({teamCaptainID}) => teamCaptainID,
  uid: ({uid}) => uid,
};
