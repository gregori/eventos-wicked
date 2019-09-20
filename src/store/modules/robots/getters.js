/* ============
 * Getters for the user module
 * ============
 *
 * The getters that are available on the
 * user module.
 */

export default {
  entries: ({entries}) => entries,
  observer: ({teamID, entries}) => `${teamID}-${entries.length}`,
  stepDone: ({teamID, entries}) => {
    return teamID !== null && entries.length > 0;
  },
  storageBaseDir: ({teamID}) => {
    return `teams/${teamID}/robots`
  },
  anyPaid: ({entries}) => {
    return entries.filter(entry => entry.actualState !== null).length > 0
  },
};
