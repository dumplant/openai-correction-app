import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      collections: [
        {
          input: "0 I have a apple",
          output: "0 I have an apple",
          id: "0",
        },
        {
          input: "1 she have an apple",
          output: "1 she has an apple",
          id: "1",
        },
        {
          input: "2 he have an apple",
          output: "2 he has an apple",
          id: "2",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
