import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import product from './product';

const store = new Vuex.Store({
  modules: {
    product
  }
});

Vue.use(store);

export default store;