export default {
  addToCollections(state, payload) {
    if (!state.collections.find((item) => item.id === payload.id))
      state.collections.unshift(payload);
  },
  removeFromCollections(state, payload) {
    console.log("payload:" + payload);
    state.collections = state.collections.filter((item) => item.id !== payload);
  },
};
