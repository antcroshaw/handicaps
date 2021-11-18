import { createStore } from 'vuex'
import handicapsModule from './handicaps.js'
const store = createStore({
  state () {
    return {
      currentHandicap: 'test'
    }
  },
  modules: {
    handicaps: handicapsModule
  },
  mutations: {
    changeHandicap (state, handicap) {
      this.state.currentHandicap = handicap
    }
  },
  actions: {
    changeHandicap (context, handicap) {
      context.commit('changeHandicap', handicap)
    }
  },
  getters: {
    handicapName (state) {
      return state.currentHandicap
    }
  }
})
export default store
