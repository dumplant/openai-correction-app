import collectionsModule from "./modules/collections/index.js";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    collections: collectionsModule,
  },
});
export default store;
