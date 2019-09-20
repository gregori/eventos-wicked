/* ============
 * Getters for the user module
 * ============
 *
 * The getters that are available on the
 * user module.
 */

export default {
  data: ({data}) => data,
  id: ({id}) => id,
  observer: ({fetched, uid, data}) => `${fetched}-${uid}-${Object.values(data).join('-')}`,
  fetched: ({fetched}) => fetched,
  stepDone: ({data}) => {
    return data.name !== null;
  },
  logoStorageBaseDir: ({id}) => {
    return `teams/${id}/logo`
  },
};
