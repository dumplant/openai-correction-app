export default {
  collections(state) {
    return state.collections;
  },
  hasCollections(state) {
    return state.collections && state.collections.length > 0;
  }
};
