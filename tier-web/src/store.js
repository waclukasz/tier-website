import Vue from 'vue'
import Vuex from 'vuex'

import allViedos from './portfolio-data/portfolio-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allViedos,
    allfilters: {
      methods: {
        all: 'all',
        music: 'music',
        commercial: 'commercial',
        reportage: 'reportage'
      },
      choosed: 'all'
    }
  },
  getters: {
    allViedos: state => state.allViedos,
    allfilters: state => state.allfilters
  },
  mutations: {
    CHOOSE_METHOD(state, method) {
      state.allfilters.choosed = method
    }
  },
  actions: {
    chooseMethod({ commit }, method) {
      commit('CHOOSE_METHOD', method)
    }
  }
})
