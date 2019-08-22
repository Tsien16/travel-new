import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '南京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
}

export default new Vuex.Store({
  state: {
    city: defaultCity,
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        if (localStorage.city) {
          defaultCity = localStorage.city;
        }
      } catch (e) {
      }
    },
  },
  // actions: {
  //   changeCity(ctx, city) {
  //     ctx.commit('changeCity', city);
  //   },
  // },
});
