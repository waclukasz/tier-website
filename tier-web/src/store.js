import Vue from 'vue'
import Vuex from 'vuex'

import allVideos from './portfolio-data/portfolio-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allVideos,
    selectedVideo: null,
    allfilters: {
      methods: {
        all: 'all',
        music: 'music',
        commercial: 'commercial',
        events: 'events'
      },
      choosed: 'all'
    },
    startIntro: true
  },
  getters: {
    allVideos: state => state.allVideos,
    selectedVideo: state => state.selectedVideo,
    allfilters: state => state.allfilters,
    startIntro: state => state.startIntro
  },
  mutations: {
    SELECT_VIDEO(state, video) {
      state.selectedVideo = video
    },
    CHOOSE_METHOD(state, method) {
      state.allfilters.choosed = method
    },
    TURN_INTRO_OFF(state, value) {
      state.startIntro = false
    }
  },
  actions: {
    selectVideo({ commit }, video) {
      commit('SELECT_VIDEO', video)
    },
    chooseMethod({ commit }, method) {
      commit('CHOOSE_METHOD', method)
    },
    turnIntroOff({ commit }, value) {
      commit('TURN_INTRO_OFF', value)
    }
  }
})
