// import Vue from "vue";

const cart = {
  namespaced: true,
  state: {
    cartPrice: 0,
  },
  getters: {
    cartPrice: state => {
      return state.cartPrice;
    },
  },
  mutations: {
    setCartPrice(state, data) {
      state.cartPrice = data.reduce((total, item) => total + (item.price * item.qty), 0);
    },
  },
  actions: {
    
  }
}

export default cart;