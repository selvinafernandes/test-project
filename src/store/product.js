import Vue from "vue";

const listing = 'https://gist.githubusercontent.com/Vugario/ca7cc468c344494ccae22b2c835e0c9f/raw/fe4669ee0989e78be1ed9ccd78ba178c695c305a/data.json';
 
const products = {
  namespaced: true,
  state: {
    variants: [],
    images: [],
    categories: [],
    storefront: {},
    productInfo: {}
  },
  getters: {
    variants: state => {
      return state.variants;
    },
    images: state => {
      return state.images;
    },
    productInfo: state => {
      return state.productInfo
    },
    brandInfo: state => {
      return state.storefront;
    }
  },
  mutations: {
    setData(state, { listing, options }) {
      options.forEach((option) => {
        state[option] = listing[option].edges.map((elem) => elem.node);
      })
    },  
    setStorefront(state, storefront) {
      state.storefront = (({ name, id }) => ({ name, id }))(storefront);
    },
    setProductInfo(state, listing) {
      state.productInfo = (({ title, description, translation }) => ({ title, description, translation }))(listing);
    }
  },
  actions: {
    getProductListing: ({  commit }) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .get(listing)
          .then(
            response => {
              commit('setProductInfo', response.data.data.storefrontBySlug.listing);
              commit('setStoreFront', response.data.data.storefrontBySlug);
              commit('setData', { listing: response.data.data.storefrontBySlug.listing, options: ['variants', 'images', 'categories']});
              resolve(response.data);
            },
            error => {
              reject(error);
            }
          );
      });
    },
  }
}

export default products;