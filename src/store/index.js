import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import product from './product';
import cart from './cart';

const store = new Vuex.Store({
  modules: {
    product,
    cart
  }
});

Vue.use(store);

export default store;